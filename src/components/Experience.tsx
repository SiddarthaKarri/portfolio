"use client";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
    const work = [
        {
            role: "Web Developer",
            company: "Kalam Dream Labs",
            period: "May 2025 - June 2025",
            description: "Built reusable CMS modules for blog and admin panels. Optimized backend queries, improving API response time by ~35%.",
        },
    ];

    const education = [
        {
            role: "B.Tech in CSE",
            company: "Gayatri Vidya Parishad",
            period: "2023 - 2027",
            description: "CGPA: 9.62/10. Completed all core subjects with distinction.",
        }
    ]

    return (
        <div className="flex flex-col gap-12">
            {/* Work */}
            <div>
                <h2 className="text-xl font-bold mb-4 tracking-tight">Work Experience</h2>
                <div className="space-y-8">
                    {work.map((job, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-semibold text-foreground">{job.company}</h3>
                                <span className="text-sm text-zinc-500">{job.period}</span>
                            </div>
                            <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mb-1">{job.role}</div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <h2 className="text-xl font-bold mb-4 tracking-tight">Education</h2>
                <div className="space-y-8">
                    {education.map((edu, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-semibold text-foreground">{edu.company}</h3>
                                <span className="text-sm text-zinc-500">{edu.period}</span>
                            </div>
                            <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mb-1">{edu.role}</div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
