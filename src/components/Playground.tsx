"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Activity, Terminal, Zap, Magnet, ArrowDown } from "lucide-react";

const symbols = ["{", "}", "</>", "&&", "||", "SQL", "HTTP", "=>", "npm", "git", ";", "[]"];
const colors = ["#22c55e", "#06b6d4", "#f97316", "#a855f7"]; // Green, Cyan, Orange, Purple

class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    text: string;
    color: string;
    canvasWidth: number;
    canvasHeight: number;

    constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
        this.x = x;
        this.y = y;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 14 + 10;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update(mouse: { x: number, y: number }, gravity: boolean, mode: "repel" | "attract") {
        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
            const force = (200 - dist) / 200;
            if (mode === "repel") {
                this.vx -= (dx / dist) * force * 2;
                this.vy -= (dy / dist) * force * 2;
            } else {
                this.vx += (dx / dist) * force * 2;
                this.vy += (dy / dist) * force * 2;
            }
        }

        // Gravity
        if (gravity) {
            this.vy += 0.1; // Gravity force
        }

        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Bounce off walls
        if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) {
            if (gravity) {
                this.vy *= -0.6; // Bounce with energy loss
                this.y = this.canvasHeight; // Reset position to floor
            } else {
                this.vy *= -1;
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `bold ${this.size}px monospace`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
}

export function Playground() {
    const [activeTab, setActiveTab] = useState("syntax");

    return (
        <section className="py-20 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Code Playground
                </h2>

                <div className="flex justify-center mb-8 space-x-4">
                    <button
                        onClick={() => setActiveTab("syntax")}
                        className={`flex items-center px-4 py-2 rounded-full transition-all ${activeTab === "syntax" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        <Terminal className="w-4 h-4 mr-2" /> Syntax Physics
                    </button>
                    <button
                        onClick={() => setActiveTab("animations")}
                        className={`flex items-center px-4 py-2 rounded-full transition-all ${activeTab === "animations" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                    >
                        <Activity className="w-4 h-4 mr-2" /> 3D Hologram
                    </button>
                </div>

                <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden min-h-[600px] relative">
                    {activeTab === "syntax" && <SyntaxPhysics />}
                    {activeTab === "animations" && <AnimationPlayground />}
                </div>
            </div>
        </section>
    );
}

function SyntaxPhysics() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gravity, setGravity] = useState(false);
    const [mode, setMode] = useState<"repel" | "attract">("repel");

    // Refs to hold current state for the animation loop
    const gravityRef = useRef(gravity);
    const modeRef = useRef(mode);

    useEffect(() => {
        gravityRef.current = gravity;
    }, [gravity]);

    useEffect(() => {
        modeRef.current = mode;
    }, [mode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationId: number;
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 800;
            canvas.height = 600;
        };

        const init = () => {
            particles = [];
            for (let i = 0; i < 60; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Matrix-like background effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update(mouse, gravityRef.current, modeRef.current);
                p.draw(ctx);
            });

            animationId = requestAnimationFrame(animate);
        };

        resize();
        init();
        animate();

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                particles.push(new Particle(e.clientX - rect.left, e.clientY - rect.top, canvas.width, canvas.height));
            }
        };

        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("click", handleClick);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative w-full h-full bg-transparent">
            <canvas ref={canvasRef} className="w-full h-[600px] cursor-crosshair" />

            {/* Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                    onClick={() => setGravity(!gravity)}
                    className={`flex items-center px-3 py-1.5 rounded-md text-sm font-mono transition-all ${gravity ? "bg-blue-500 text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"
                        }`}
                >
                    <ArrowDown className="w-4 h-4 mr-2" />
                    Gravity: {gravity ? "ON" : "OFF"}
                </button>

                <button
                    onClick={() => setMode(mode === "repel" ? "attract" : "repel")}
                    className={`flex items-center px-3 py-1.5 rounded-md text-sm font-mono transition-all ${mode === "attract" ? "bg-purple-500 text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"
                        }`}
                >
                    {mode === "attract" ? <Magnet className="w-4 h-4 mr-2" /> : <Zap className="w-4 h-4 mr-2" />}
                    Mode: {mode === "repel" ? "REPEL" : "ATTRACT"}
                </button>
            </div>

            <div className="absolute top-4 left-4 text-green-500/50 text-sm pointer-events-none font-mono">
                &gt; System Status: Online
                <br />
                &gt; Physics Engine: Active
                <br />
                &gt; Click to inject code...
            </div>
        </div>
    );
}

function AnimationPlayground() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div className="w-full h-[600px] flex items-center justify-center bg-transparent perspective-1000">
            <div style={{ perspective: 2000 }}>
                <motion.div
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.16}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: "grabbing" }}
                    className="w-[300px] h-[450px] bg-gradient-to-tr from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 cursor-grab relative group"
                >
                    {/* Holographic Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 shadow-[0_0_50px_rgba(6,182,212,0.5)] flex items-center justify-center">
                        <Activity className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">Holographic Card</h3>
                    <p className="text-muted-foreground text-center text-sm">
                        Drag me around! I respond to your touch with 3D physics.
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-2 w-full">
                        <div className="h-1 bg-muted-foreground/20 rounded-full w-full"></div>
                        <div className="h-1 bg-muted-foreground/20 rounded-full w-2/3"></div>
                        <div className="h-1 bg-muted-foreground/20 rounded-full w-full"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
