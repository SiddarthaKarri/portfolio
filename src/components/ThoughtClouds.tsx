"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const thoughts = [
    "Test Cricket is art",
    "Nolan's timelines...",
    "Why is light a wave AND a particle?",
    "Did I close that tag?",
    "Entropy always increases",
    "Coffee or Tea?",
    "That shot was perfect",
    "Cinematography in Dune...",
    "Recursion is beautiful",
    "42",
];

export function ThoughtClouds() {
    const [activeThoughts, setActiveThoughts] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                const id = Date.now();
                const text = thoughts[Math.floor(Math.random() * thoughts.length)];
                const x = Math.random() * 80 + 10; // 10% to 90% width
                const y = Math.random() * 80 + 10; // 10% to 90% height

                setActiveThoughts((prev) => [...prev, { id, text, x, y }]);

                setTimeout(() => {
                    setActiveThoughts((prev) => prev.filter((t) => t.id !== id));
                }, 4000);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <AnimatePresence>
                {activeThoughts.map((thought) => (
                    <motion.div
                        key={thought.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1 }}
                        className="absolute text-sm md:text-base text-muted-foreground/50 font-mono whitespace-nowrap"
                        style={{ left: `${thought.x}%`, top: `${thought.y}%` }}
                    >
                        {thought.text}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
