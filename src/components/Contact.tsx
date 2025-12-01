"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Background Gradients - Theme Aware */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--primary)/0.1,transparent)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-foreground">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Connect</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Have a project in mind? Let's chat.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <ContactCard
                        icon={<Mail className="w-8 h-8" />}
                        title="Email Me"
                        value="siddarthak03@gmail.com"
                        href="mailto:siddarthak03@gmail.com"
                        color="bg-blue-500/10 text-blue-500 border-blue-500/20"
                    />
                    <ContactCard
                        icon={<Linkedin className="w-8 h-8" />}
                        title="LinkedIn"
                        value="in/siddarthakarri"
                        href="https://linkedin.com/in/siddarthakarri"
                        color="bg-blue-700/10 text-blue-700 border-blue-700/20"
                    />
                    <ContactCard
                        icon={<Github className="w-8 h-8" />}
                        title="GitHub"
                        value="@siddarthakarri"
                        href="https://github.com/siddarthakarri"
                        color="bg-foreground/5 text-foreground border-foreground/10"
                    />
                    <ContactCard
                        icon={<Twitter className="w-8 h-8" />}
                        title="Twitter"
                        value="@IamSiddarthaK"
                        href="https://twitter.com/IamSiddarthaK"
                        color="bg-sky-500/10 text-sky-500 border-sky-500/20"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground text-sm"
                >
                    © 2025 Siddartha. Built with Next.js, Tailwind.
                </motion.div>
            </div>
        </section>
    );
}

function ContactCard({ icon, title, value, href, color }: any) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${color} flex flex-col items-center justify-center gap-4 hover:shadow-lg`}
        >
            <div className="p-4 rounded-full bg-background/50 group-hover:bg-background/80 transition-colors shadow-sm">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="opacity-80 group-hover:opacity-100 text-sm md:text-base break-all">{value}</p>
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>
    );
}