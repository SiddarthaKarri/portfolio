
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
    { type: "response", content: "Welcome to Siddartha's Terminal. Type 'help' for commands." },
    { type: "command", content: "projects" },
    {
      type: "response",
      content: (
        <div className="space-y-4">
          <div className="text-green-500">// My recent work. Click on a project to learn more!</div>
          <div className="grid gap-4 md:grid-cols-2">
            {/* <a
              href="https://github.com/Siddartha-K/GenFolio" // Replace with actual project URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">GenFolio</h3>
              <p className="text-muted-foreground">Portfolio generator with customizable templates.</p>
              <div className="mt-2 text-xs text-blue-400">HTML, CSS, JS</div>
            </a>
            <a
              href="https://github.com/Siddartha-K/AutoCertGen" // Replace with actual project URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">AutoCertGen</h3>
              <p className="text-muted-foreground">Bulk certificate generator from Excel data.</p>
              <div className="mt-2 text-xs text-blue-400">HTML, CSS, JS</div>
            </a> */}
            <a
              href="https://job-mateai.vercel.app/" // Replace with actual project URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">JobMate AI</h3>
              <p className="text-muted-foreground">AI Powered Resume Analyzer. Evaluates resumes against job descriptions using AI and NLP.</p>
              <div className="mt-2 text-xs text-blue-400">AI, NLP, Web Dev</div>
            </a>
            <a
              href="https://github.com/SiddarthaKarri/algogeeks" // Replace with actual project URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">CampusCode</h3>
              <p className="text-muted-foreground">Online coding & contest platform (Full-Stack MERN) for 100+ students with custom judge and Docker sandboxing.</p>
              <div className="mt-2 text-xs text-blue-400">MERN, Docker, C++</div>
            </a>
            <a
              href="https://siddarthakarri.github.io/LeetForces/" // Replace with actual project URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">LeetForces</h3>
              <p className="text-muted-foreground">Competitive Coding Tracker with Codeforces API, LeetCode-style UI, user comparison, and roadmaps.</p>
              <div className="mt-2 text-xs text-blue-400">Codeforces API, Caching</div>
            </a>
            <a
              href="https://github.com/SiddarthaKarri/BusTracker-App" // Replace with actual project URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">Bus Driver Tracking App</h3>
              <p className="text-muted-foreground">Real-time location tracking using React Native & Google Maps API with push notifications.</p>
              <div className="mt-2 text-xs text-blue-400">React Native, Google Maps API</div>
            </a>
            <a
              href="https://siddarthakarri.github.io/portfolio/" // Replace with actual portfolio URL
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
            >
              <h3 className="font-bold text-lg">Personal Portfolio</h3>
              <p className="text-muted-foreground">A responsive portfolio with animations and smooth scroll, attracting 200+ visitors.</p>
              <div className="mt-2 text-xs text-blue-400">Web Dev, Animations</div>
            </a>
          </div>
        </div>
      ),
    }
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
          content: (
            <div className="space-y-1">
              <div>Available commands:</div>
              <div className="grid grid-cols-2 gap-2 max-w-xs">
                <span className="text-yellow-400">ls</span> <span>List files</span>
                <span className="text-yellow-400">cat [file]</span> <span>View file content</span>
                <span className="text-yellow-400">clear</span> <span>Clear terminal</span>
                <span className="text-yellow-400">whoami</span> <span>User info</span>
                <span className="text-yellow-400">contact</span> <span>Get contact info</span>
              </div>
            </div>
          ),
        });
        break;
      case "ls":
        newHistory.push({
          type: "response",
          content: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="text-blue-400">projects.tsx</span>
              <span className="text-yellow-400">skills.json</span>
              <span className="text-purple-400">experience.md</span>
              <span className="text-purple-400">education.md</span>
              <span className="text-green-400">competitive_programming.cpp</span>
              <span className="text-gray-400">about.txt</span>
              <span className="text-gray-400">contact.txt</span>
            </div>
          ),
        });
        break;
      case "cat projects.tsx":
      case "projects":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-4">
              <div className="text-green-500">// My recent work.</div>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="https://job-mateai.vercel.app/" // Replace with actual project URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-lg">JobMate AI</h3>
                  <p className="text-muted-foreground">AI Powered Resume Analyzer. Evaluates resumes against job descriptions using AI and NLP.</p>
                  <div className="mt-2 text-xs text-blue-400">AI, NLP, Web Dev</div>
                </a>
                <a
                  href="https://github.com/SiddarthaKarri/algogeeks" // Replace with actual project URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-lg">CampusCode</h3>
                  <p className="text-muted-foreground">Online coding & contest platform (Full-Stack MERN) for 100+ students with custom judge and Docker sandboxing.</p>
                  <div className="mt-2 text-xs text-blue-400">MERN, Docker, C++</div>
                </a>
                <a
                  href="https://siddarthakarri.github.io/LeetForces/" // Replace with actual project URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-lg">LeetForces</h3>
                  <p className="text-muted-foreground">Competitive Coding Tracker with Codeforces API, LeetCode-style UI, user comparison, and roadmaps.</p>
                  <div className="mt-2 text-xs text-blue-400">Codeforces API, Caching</div>
                </a>
                <a
                  href="https://github.com/SiddarthaKarri/BusTracker-App" // Replace with actual project URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-lg">Bus Driver Tracking App</h3>
                  <p className="text-muted-foreground">Real-time location tracking using React Native & Google Maps API with push notifications.</p>
                  <div className="mt-2 text-xs text-blue-400">React Native, Google Maps API</div>
                </a>
                <a
                  href="https://siddarthakarri.github.io/portfolio/" // Replace with actual portfolio URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-border rounded hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-bold text-lg">Personal Portfolio</h3>
                  <p className="text-muted-foreground">A responsive portfolio with animations and smooth scroll, attracting 200+ visitors.</p>
                  <div className="mt-2 text-xs text-blue-400">Web Dev, Animations</div>
                </a>
              </div>
            </div>
          ),
        });
        break;
      case "cat experience.md":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-4 text-sm">
              <div className="text-blue-400 font-bold"># Work Experience</div>
              <div className="pl-4 border-l-2 border-muted">
                <div className="font-bold text-foreground">Web Developer Intern | Kalam Dream Labs</div>
                <div className="text-xs text-muted-foreground">05/2025 - 06/2025 | Visakhapatnam</div>
                <ul className="list-disc list-inside mt-1 text-muted-foreground">
                  <li>Built reusable CMS modules for blog and admin panels using Next.js and PostgreSQL.</li>
                  <li>Optimized backend queries, improving API response time by ~35%.</li>
                  <li>Integrated authentication, admin dashboards, and role-based access.</li>
                  <li>Collaborated in Agile sprints, client demos, code reviews, and QA testing.</li>
                </ul>
              </div>
            </div>
          ),
        });
        break;

      case "cat education.md":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-4 text-sm">
              <div className="text-purple-400 font-bold"># Education</div>
              <div className="pl-4 border-l-2 border-muted">
                <div className="font-bold text-foreground">B.Tech in Computer Science and Engineering</div>
                <div className="text-xs text-muted-foreground">Gayatri Vidya Parishad College of Engineering | Visakhapatnam | 2023 - 2027</div>
                <div className="mt-1 text-muted-foreground">CGPA: 9.62/10</div>
                <div className="mt-1 text-muted-foreground">Relevant Coursework: DSA, OS, DBMS, CN, AI/ML.</div>
              </div>
            </div>
          ),
        });
        break;

      case "cat about.txt":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Hi, I'm <span className="text-foreground font-bold">Siddartha</span>.</p>
              <p>I'm a passionate Full Stack MERN Developer with a knack for crafting robust and scalable web applications. I’ve honed my skills in cutting-edge technologies like MongoDB, Express.js, React, and Node.js, along with modern tools such as Tailwind CSS. I enjoy leveraging my technical skills and creativity to build innovative end-to-end solutions.</p>
              <p>Whether it's developing responsive, high-performance frontends, designing efficient backends, or creating seamless user experiences, I'm always eager to learn new tools and stay updated with industry trends to ensure the solutions I deliver are modern, efficient, and future-proof.</p>
            </div>
          ),
        });
        break;

      case "cat contact.txt":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-2 text-sm">
              <div className="text-green-400 font-bold"># Let's Connect</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:siddartha@example.com" className="flex items-center hover:text-primary transition-colors">
                  <span className="w-24 text-muted-foreground">Email:</span>
                  <span>siddarthak03@gmail.com</span>
                </a>
                <a href="https://github.com/siddarthakarri" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <span className="w-24 text-muted-foreground">GitHub:</span>
                  <span>github.com/siddarthakarri</span>
                </a>
                <a href="https://linkedin.com/in/siddarthakarri" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <span className="w-24 text-muted-foreground">LinkedIn:</span>
                  <span>linkedin.com/in/siddarthakarri</span>
                </a>
                <a href="https://twitter.com/IamSiddarthaK" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <span className="w-24 text-muted-foreground">Twitter:</span>
                  <span>twitter.com/IamSiddarthaK</span>
                </a>
              </div>
            </div>
          ),
        });
        break;

      case "cat competitive_programming.cpp":
      case "cp":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-4">
              <div className="text-yellow-500">// Solving problems under pressure.</div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between items-center p-2 border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <span>ICPC Regionalist</span>
                  <span className="text-purple-500 font-bold">Asia West Amritapuri - Qualified 2025</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <span>LeetCode</span>
                  <span className="text-orange-500 font-bold">Rating : 1905+ | Knight</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <span>CodeForces</span>
                  <span className="text-cyan-500 font-bold">Max Rating: 1427 | Specialist</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <span>CodeChef</span>
                  <span className="text-green-500 font-bold">2 Star | 1593</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <span>GeeksForGeeks</span>
                  <span className="text-green-500 font-bold">Institute Rank 555</span>
                </div>
                <div className="flex justify-between items-center p-2 border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <span>Google Developer Student Clubs</span>
                  <span className="text-blue-500 font-bold">Competitive Programming Lead</span>
                </div>

              </div>
              <div className="mt-4 p-4 bg-muted/20 rounded border-l-2 border-yellow-500">
                <code className="text-xs md:text-sm block whitespace-pre overflow-x-auto text-muted-foreground">
                  {`// "The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie`}
                </code>
              </div>
            </div>
          ),
        });
        break;
      case "cat skills.json":
      case "skills":
        newHistory.push({
          type: "response",
          content: (
            <div className="space-y-4">
              <div className="text-blue-500">// My toolbelt.</div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 p-4">
                {[
                  { name: "C++", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
                  { name: "Python", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
                  { name: "Java", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
                  { name: "JavaScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
                  { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
                  { name: "Next.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
                  { name: "Git", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
                  { name: "Express", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
                  { name: "MongoDB", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
                  { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
                  { name: "MySQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
                  { name: "React Native", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
                  { name: "Firebase", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
                  { name: "AWS", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
                  { name: "Postman", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" },
                ].map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-2 hover:bg-muted/20 rounded transition-colors group">
                    <img
                      src={skill.url}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        newHistory.push({ type: "response", content: "Siddartha. Developer. Enthusiast." });
        break;
      case "contact":
        newHistory.push({ type: "response", content: "Email: siddarthak03@gmail.com\nGitHub: @siddarthakarri" });
        break;
      default:
        newHistory.push({ type: "error", content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/10">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Interactive Terminal
      </h2>
      <div className="w-full max-w-4xl bg-card border border-border rounded-lg shadow-2xl overflow-hidden flex flex-col h-[600px]">
        {/* Header / Tabs */}
        <div className="flex items-center bg-muted/50 border-b border-border p-2 overflow-x-auto shrink-0">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <button
            onClick={() => handleCommand("cat projects.tsx")}
            className="flex items-center px-3 py-1 text-sm text-muted-foreground hover:bg-background/50 rounded-md transition-colors mr-2 whitespace-nowrap"
          >
            <GitBranch className="w-4 h-4 mr-2" />
            projects.tsx
          </button>
          <button
            onClick={() => handleCommand("cat competitive_programming.cpp")}
            className="flex items-center px-3 py-1 text-sm text-muted-foreground hover:bg-background/50 rounded-md transition-colors mr-2 whitespace-nowrap"
          >
            <Trophy className="w-4 h-4 mr-2" />
            cp.cpp
          </button>
          <button
            onClick={() => handleCommand("cat skills.json")}
            className="flex items-center px-3 py-1 text-sm text-muted-foreground hover:bg-background/50 rounded-md transition-colors mr-2 whitespace-nowrap"
          >
            <Terminal className="w-4 h-4 mr-2" />
            skills.json
          </button>
          <button
            onClick={() => handleCommand("cat experience.md")}
            className="flex items-center px-3 py-1 text-sm text-muted-foreground hover:bg-background/50 rounded-md transition-colors mr-2 whitespace-nowrap"
          >
            <Code className="w-4 h-4 mr-2" />
            exp.md
          </button>
          <button
            onClick={() => handleCommand("cat contact.txt")}
            className="flex items-center px-3 py-1 text-sm text-muted-foreground hover:bg-background/50 rounded-md transition-colors whitespace-nowrap"
          >
            <Send className="w-4 h-4 mr-2" />
            contact.txt
          </button>
        </div>

        {/* Terminal Output */}
        <div
          ref={scrollRef}
          className="flex-1 p-6 font-mono text-sm md:text-base overflow-y-auto bg-black/90 text-green-400 no-scrollbar"
          onClick={() => document.getElementById("terminal-input")?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              {entry.type === "command" && (
                <div className="flex items-center text-muted-foreground">
                  <span className="mr-2">$</span>
                  <span>{entry.content}</span>
                </div>
              )}
              {entry.type === "response" && <div className="ml-4">{entry.content}</div>}
              {entry.type === "error" && <div className="ml-4 text-red-500">{entry.content}</div>}
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center mt-2">
            <span className="mr-2 text-blue-400">visitor@portfolio:~$</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCommand(input);
                if (e.key === "Tab") {
                  e.preventDefault();
                  if (input.trim().toLowerCase() === "cat cp") {
                    setInput("cat competitive_programming.cpp");
                  }
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-foreground"
              autoFocus
              autoComplete="off"
            />
          </div>
        </div>
      </div >
    </section >
  );
}
