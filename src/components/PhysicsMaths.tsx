"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function PhysicsMaths() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const currentTheme = resolvedTheme || theme;
        if (!mounted || (currentTheme !== "dark" && currentTheme !== "spotlight")) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };
        let frameCount = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            targetX: number | null = null;
            targetY: number | null = null;
            radius: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2;
                this.radius = Math.random() * 2 + 1;
                this.color = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, 0.5)`;
            }

            update() {
                // DSA Structure Formation (every 600 frames)
                if (this.targetX !== null && this.targetY !== null) {
                    const dx = this.targetX - this.x;
                    const dy = this.targetY - this.y;
                    this.x += dx * 0.05;
                    this.y += dy * 0.05;

                    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
                        // Release after holding for a bit? 
                        // For now, just stay until reset
                    }
                } else {
                    this.x += this.vx;
                    this.y += this.vy;

                    // Mouse Repulsion
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        const angle = Math.atan2(dy, dx);
                        const force = (150 - distance) / 150;
                        this.vx += Math.cos(angle) * force * 0.5;
                        this.vy += Math.sin(angle) * force * 0.5;
                    }

                    // Bounce off walls
                    if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                    // Friction
                    this.vx *= 0.99;
                    this.vy *= 0.99;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const formBinaryTree = () => {
            const startX = canvas!.width / 2;
            const startY = 100;
            const levels = 5;
            let pIndex = 0;

            const placeNode = (x: number, y: number, level: number) => {
                if (level >= levels || pIndex >= particles.length) return;

                particles[pIndex].targetX = x;
                particles[pIndex].targetY = y;
                pIndex++;

                const offset = canvas!.width / Math.pow(2, level + 2);
                placeNode(x - offset, y + 100, level + 1);
                placeNode(x + offset, y + 100, level + 1);
            };

            placeNode(startX, startY, 0);

            // Reset after 5 seconds
            setTimeout(() => {
                particles.forEach(p => {
                    p.targetX = null;
                    p.targetY = null;
                    p.vx = (Math.random() - 0.5) * 2;
                    p.vy = (Math.random() - 0.5) * 2;
                });
            }, 5000);
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frameCount++;

            // Trigger DSA formation occasionally
            if (frameCount % 1200 === 0) { // Every ~20 seconds
                formBinaryTree();
            }

            // Draw connections (Maths/Geometry)
            ctx.strokeStyle = "rgba(100, 100, 255, 0.1)";
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mounted, theme, resolvedTheme]);

    if (!mounted) return null;

    const currentTheme = resolvedTheme || theme;
    if (currentTheme !== "dark" && currentTheme !== "spotlight") return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-30"
        />
    );
}
