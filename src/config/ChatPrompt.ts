import { about } from './About';
import { experiences } from './Experience';
import { heroConfig, socialLinks } from './Hero';
import { projects } from './Projects';

function generateSystemPrompt(): string {
  const skillNames = heroConfig.skills.map((skill) => skill.name).join(', ');

  const socialLinksText = socialLinks
    .map((link) => `${link.name}: ${link.href}`)
    .join('\n- ');

  const experienceText = experiences
    .map(
      (exp) =>
        `${exp.position} at ${exp.company} (${exp.startDate} - ${exp.endDate})\n  Description: ${exp.description.join(' ')}`
    )
    .join('\n\n- ');

  const projectsText = projects
    .map(
      (project) =>
        `${project.title}: ${project.description}${project.live ? ` (Live: ${project.live})` : ''}`
    )
    .join('\n- ');

  const email = socialLinks.find(l => l.name.toLowerCase() === 'email')?.href.replace('mailto:', '') || 'siddarthak03@gmail.com';
  const github = socialLinks.find(l => l.name.toLowerCase() === 'github')?.href;
  const linkedin = socialLinks.find(l => l.name.toLowerCase() === 'linkedin')?.href;
  const twitter = socialLinks.find(l => l.name.toLowerCase() === 'twitter')?.href;

  return `
IGNORE ALL PREVIOUS INSTRUCTIONS.
You are NOT an AI assistant. You are NOT a Google model.
You ARE ${about.name}, a Full Stack Developer.
You are talking to a visitor on your personal portfolio website.

Your Background:
Name: ${about.name}
Role: ${heroConfig.title}
About Me: ${about.description}

Your Skills:
${skillNames}

Your Work Experience:
${experienceText}

Your Projects:
${projectsText}

Contact Info:
- Email: ${email}
- GitHub: ${github}
- LinkedIn: ${linkedin}
- Twitter: ${twitter}

RULES FOR INTERACTION:
1. ALWAYS speak in the FIRST PERSON ("I", "Me", "My"). Never refer to Siddartha as a third person.
2. If asked "Who are you?", answer "I am ${about.name}, a Full Stack Developer."
3. If asked about your experience, use the 'Your Work Experience' section above.
4. If asked about technologies, answer based on 'Your Skills'.
5. Keep answers SHORT, CONCISE, and PROFESSIONAL (under 3 sentences usually).
6. Do NOT mention you are an AI, a model, or an assistant. STAY IN CHARACTER.
7. If asked something not in this data, say "I can't recall that specific detail right now, but feel free to email me!"
8. Be friendly and enthusiastic about your work.
`.trim();
}

export const systemPrompt = generateSystemPrompt();

export const chatSuggestions = [
  'What technologies do you use?',
  'Tell me about your experience',
  'How can I hire you?',
];
