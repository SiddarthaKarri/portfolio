"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
    // {
    //     id: 1,
    //     type: "work",
    //     role: "Software Engineer Intern",
    //     company: "TechCorp",
    //     period: "June 2024 - Present",
    //     description: "Building scalable APIs and optimizing database queries. Reduced load times by 40% using Redis caching.",
    //     skills: ["Node.js", "TypeScript", "Redis", "AWS"],
    // },
    {
        id: 2,
        type: "work",
        role: "Web Developer",
        company: "Kalam Dream Labs",
        period: "May 2025 - June 2025",
        description: "Built reusable CMS modules for blog and admin panels. Optimized backend queries, improving API response time by ~35%.",
        skills: ["Next.js", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    },
    {
        id: 3,
        type: "education",
        role: "B.Tech in Computer Science and Engineering",
        company: "Gayatri Vidya Parishad College of Engineering",
        period: "2023 - 2027",
        description: "CGPA: 9.62/10. Completed all core subjects with distinction.",
        skills: ["DSA", "OS", "DBMS", "CN", "OOP", "Web Development"],
    },
];

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="py-20 relative overflow-hidden">
            {/* Background Flow Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    My Journey
                </motion.h2>

                <div className="space-y-20 md:space-y-32">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={exp.id} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ data, index }: { data: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hidden md:block" />

            {/* Content Card */}
            <div className={`w-full md:w-1/2 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:border-primary/50 group">
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                            {data.type === "work" ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{data.role}</h3>
                            <p className="text-primary font-medium">{data.company}</p>
                        </div>
                    </div>

                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        <Calendar size={14} />
                        <span>{data.period}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {data.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                        {data.skills.map((skill: string) => (
                            <span key={skill} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer for the other side */}
            <div className="w-full md:w-1/2 hidden md:block" />
        </motion.div>
    );
}
