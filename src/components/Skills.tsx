"use client";

import { motion } from "framer-motion";

const skills = [
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

];

export function Skills() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                    Technical Arsenal
                </h2>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center justify-center group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 p-4 bg-muted/30 rounded-2xl backdrop-blur-sm border border-border group-hover:border-primary/50 transition-colors mb-4">
                                <img src={skill.url} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
