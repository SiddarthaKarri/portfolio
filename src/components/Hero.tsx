"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "Hi, I'm Siddartha.",
        "I build things.",
        "I... um...",
        "I overthink.",
        "I write code.",
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="z-10 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 font-mono min-h-[4rem]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {text}
                    <span className="animate-pulse">|</span>
                </motion.h1>
                <motion.p
                    className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    B.Tech Student
                    <br />
                    Full Stack Web Developer
                </motion.p>
            </div>

            {/* Background Elements (Subtle/Introvert) */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>
        </section>
    );
}
