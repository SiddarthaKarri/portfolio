import { systemPrompt } from '@/config/ChatPrompt';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import * as z from 'zod';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10; // Increased slightly

const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        parts: z.array(z.object({ text: z.string() })),
      }),
    )
    .optional()
    .default([]),
});

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');

  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;

  return 'unknown';
}

function checkRateLimit(clientIP: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count };
}

// User provided API details
const AIML_API_KEY = '474c3ef1c2e543e098693fa996c15d14';
const BASE_URL = 'https://api.aimlapi.com/v1';
const MODEL = 'google/gemma-3n-e4b-it'; // As requested by user

const openai = new OpenAI({
  apiKey: AIML_API_KEY,
  baseURL: BASE_URL,
});

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = chatSchema.parse(body);

    // Gemma models on AIML do not support 'system' role.
    // We must prepend the system prompt to the first user message.

    // Convert history format to OpenAI format
    const historyMessages = validatedData.history.map((msg) => ({
      role: msg.role === 'model' ? 'assistant' : 'user',
      content: msg.parts[0].text,
    }));

    let messages;

    if (historyMessages.length === 0) {
      // First message in conversation
      messages = [
        {
          role: 'user',
          content: `${systemPrompt}\n\nUser: ${validatedData.message}`
        }
      ];
    } else {
      // History exists
      messages = [
        // Ensure the system prompt is contextually present even if we can't use 'system' role
        // Ideally it was in the first message of history, but to be safe we can re-inject acts-like behavior
        // or just rely on the fact that the first message (now in history) probably had it.
        // For robustness with this specific error, let's just use the history + new message.
        // But if the session is new, we prepend it.
        ...historyMessages,
        { role: 'user', content: validatedData.message },
      ];

      // If the very first message in history was from user, we might want to ensure it had the prompt.
      // But since we can't easily edit history without potentially messing up token counts or context,
      // Let's assume the session started correctly or just prepend instruction to current message if history is short.
      if (historyMessages.length > 0 && historyMessages[0].role === 'user') {
        // modifying history[0] content to include system prompt if it wasn't there? 
        // Actually, if we are in a session, the model likely remembers the persona. 
        // However, if we're hitting a stateless API, we send full history.
        // If history[0] is user, let's prepend system prompt there.
        messages[0].content = `${systemPrompt}\n\n${messages[0].content}`;
      }
    }

    const stream = await openai.chat.completions.create({
      model: MODEL,
      // @ts-ignore - OpenAI types might not perfectly match custom model inputs but the library handles it
      messages: messages as any,
      max_tokens: 512,
      temperature: 0.7,
      stream: true,
    });

    // Create a TransformStream to convert OpenAI chunks to the expected SSE format
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              const sseData = `data: ${JSON.stringify({ text: content })}\n\n`;
              controller.enqueue(encoder.encode(sseData));
            }
          }
          controller.enqueue(encoder.encode('data: {"done": true}\n\n'));
          controller.close();
        } catch (err) {
          console.error('Stream error:', err);
          controller.error(err);
        }
      },
    });

    return new NextResponse(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
