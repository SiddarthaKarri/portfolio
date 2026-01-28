"use client";

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "C++", "Python",
    "PostgreSQL", "Docker", "AWS", "Framer Motion"
];

export function Skills() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4 tracking-tight">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-md text-xs font-medium font-mono hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}
