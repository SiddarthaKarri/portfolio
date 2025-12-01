"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SunClouds() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = resolvedTheme || theme;
    if (currentTheme !== "light") return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100 pointer-events-none">
            {/* Sun */}
            <motion.div
                className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-80"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 rounded-full shadow-[0_0_60px_rgba(253,224,71,0.6)]" />

            {/* Clouds */}
            <Cloud top="10%" left="10%" delay={0} duration={20} scale={1.2} />
            <Cloud top="25%" left="60%" delay={5} duration={25} scale={0.8} />
            <Cloud top="15%" left="80%" delay={2} duration={22} scale={1.5} />
            <Cloud top="40%" left="-10%" delay={8} duration={30} scale={1.0} />
            <Cloud top="60%" left="90%" delay={12} duration={28} scale={1.3} />
        </div>
    );
}

function Cloud({ top, left, delay, duration, scale }: { top: string, left: string, delay: number, duration: number, scale: number }) {
    return (
        <motion.div
            className="absolute opacity-80"
            style={{ top, left, scale }}
            animate={{ x: ["-10vw", "110vw"] }}
            transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        >
            <div className="relative w-32 h-12 bg-white rounded-full">
                <div className="absolute -top-6 left-4 w-12 h-12 bg-white rounded-full" />
                <div className="absolute -top-10 left-10 w-16 h-16 bg-white rounded-full" />
                <div className="absolute -top-4 left-20 w-10 h-10 bg-white rounded-full" />
            </div>
        </motion.div>
    );
}
