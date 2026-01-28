"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Command, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { name: "Work", href: "#work" },
        { name: "Blogs", href: "#blogs" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 max-w-2xl mx-auto items-center justify-between px-4 sm:px-6">

                {/* Logo / Home */}
                <Link href="/" className="flex items-center space-x-2">
                    {/* Using a simple emoji or icon as placeholder for the pixel avatar in navbar if desired, or just text */}
                    <span className="font-bold inline-block">SK</span>
                </Link>

                {/* Center Links */}
                <nav className="flex items-center gap-6 text-sm font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === link.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                    {/* Search Placeholder */}
                    {/* <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-muted-foreground">
                <span className="text-xs">Search</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button> */}

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    >
                        {mounted && theme === "dark" ? (
                            <Moon className="h-4 w-4" />
                        ) : (
                            <Sun className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
