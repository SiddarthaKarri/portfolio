
"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, Code, GitBranch, Trophy, Send } from "lucide-react";

type CommandOutput = {
  type: "command" | "response" | "error";
  content: React.ReactNode;
};

export function WorkCode() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    { type: "response", content: "Welcome to Siddartha's Terminal." },
    { type: "command", content: "help" },
    { type: "response", content: "Try: projects, skills, contact, whoami" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "command" as const, content: cmd }];

    switch (trimmedCmd) {
      case "help":
        newHistory.push({
          type: "response",
          content: "Available: projects, skills, contact, whoami, clear",
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        newHistory.push({ type: "response", content: "Siddartha. Dev. Builder." });
        break;
      case "contact":
        newHistory.push({ type: "response", content: "github.com/siddarthakarri" });
        break;
      case "projects":
        newHistory.push({
          type: "response",
          content: (
            <div className="flex flex-col gap-1">
              <a href="https://job-mateai.vercel.app/" target="_blank" className="text-blue-400 hover:underline">JobMate AI</a>
              <a href="https://siddarthakarri.github.io/LeetForces/" target="_blank" className="text-blue-400 hover:underline">LeetForces</a>
              <span className="text-zinc-500">...and more on GitHub</span>
            </div>
          )
        });
        break;
      default:
        newHistory.push({ type: "error", content: `Command not found: ${trimmedCmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-zinc-300 font-mono text-xs rounded-lg overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-zinc-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        <div className="ml-4 text-zinc-500">~siddartha</div>
      </div>

      {/* Terminal Area */}
      <div
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto no-scrollbar"
        onClick={() => document.getElementById("terminal-input")?.focus()}
      >
        {history.map((entry, i) => (
          <div key={i} className="mb-1">
            {entry.type === "command" && (
              <div className="flex items-center text-zinc-400">
                <span className="mr-2 text-green-500">➜</span>
                <span>{entry.content}</span>
              </div>
            )}
            {entry.type === "response" && <div className="ml-5 text-zinc-300">{entry.content}</div>}
            {entry.type === "error" && <div className="ml-5 text-red-400">{entry.content}</div>}
          </div>
        ))}

        <div className="flex items-center mt-1">
          <span className="mr-2 text-green-500">➜</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCommand(input);
            }}
            className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-600"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
