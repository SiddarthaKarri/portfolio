"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AsciiBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const characters = "01";
        const fontSize = 14;
        const columns = width / fontSize;

        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            // Set background with very low opacity to create trail effect
            // Use different colors based on theme
            const isDark = theme === 'dark' || theme === 'system';

            ctx.fillStyle = isDark
                ? "rgba(0, 0, 0, 0.05)"
                : "rgba(255, 255, 255, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = isDark ? "#333" : "#ddd"; // Very subtle text color
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const intervalId = setInterval(draw, 33);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener("resize", handleResize);
        };
    }, [theme]);

    // Fixed position, behind everything
    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 opacity-40"
        />
    );
}
