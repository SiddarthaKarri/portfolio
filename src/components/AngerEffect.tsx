"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AngerEffect() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (theme !== "anger") return;

        const canvas = document.createElement("canvas");
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "0"; // Background layer
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let asteroids: Asteroid[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Asteroid {
            x: number;
            y: number;
            size: number;
            speed: number;
            angle: number;
            rotationSpeed: number;

            constructor() {
                // Start from top-right area
                if (Math.random() > 0.5) {
                    // Top edge
                    this.x = Math.random() * (canvas.width * 1.5);
                    this.y = -100;
                } else {
                    // Right edge
                    this.x = canvas.width + 100;
                    this.y = Math.random() * (canvas.height * 1.5) - 500;
                }

                this.size = Math.random() * 40 + 20;
                this.speed = Math.random() * 8 + 4; // Fast
                this.angle = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.1;
            }

            update() {
                // Move diagonally: Top-Right to Bottom-Left
                this.x -= this.speed * 1.2; // Move Left
                this.y += this.speed;       // Move Down
                this.angle += this.rotationSpeed;

                // Reset if out of bounds (bottom or left)
                if (this.y > canvas.height + 100 || this.x < -100) {
                    if (Math.random() > 0.5) {
                        this.x = Math.random() * (canvas.width * 1.5) + canvas.width * 0.2;
                        this.y = -100;
                    } else {
                        this.x = canvas.width + 100;
                        this.y = Math.random() * canvas.height - 200;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                // Realistic Fireball Effect using Gradients
                const gradient = ctx.createRadialGradient(0, 0, this.size * 0.2, 0, 0, this.size);
                gradient.addColorStop(0, "rgba(255, 255, 200, 1)"); // White/Yellow Core
                gradient.addColorStop(0.2, "rgba(255, 150, 0, 0.9)"); // Orange
                gradient.addColorStop(0.6, "rgba(200, 50, 0, 0.6)"); // Red
                gradient.addColorStop(1, "rgba(100, 0, 0, 0)"); // Transparent fade

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        const init = () => {
            asteroids = [];
            for (let i = 0; i < 25; i++) {
                asteroids.push(new Asteroid());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            asteroids.forEach(a => {
                a.update();
                a.draw();
            });
            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
            document.body.removeChild(canvas);
        };
    }, [theme]);

    if (!mounted) return null;

    if (theme !== "anger") return null;

    return (
        <>
            {/* Red Vignette */}
            <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,0,0,0.15)_100%)] mix-blend-overlay" />

            {/* Subtle Screen Shake */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-20"
                animate={{
                    x: [0, -2, 2, -1, 1, 0],
                    y: [0, 1, -1, 2, -2, 0],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                style={{
                    background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')",
                }}
            />
        </>
    );
}
