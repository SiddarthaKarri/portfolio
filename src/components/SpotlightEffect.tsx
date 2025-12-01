"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SpotlightEffect() {
    const { theme } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    if (!mounted) return null;

    if (theme !== "spotlight") return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-colors duration-300"
            style={{
                background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0, 0, 0, 0.98) 100%)`,
            }}
        />
    );
}
