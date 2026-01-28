"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CopyIcon, FileTextIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Assuming react-icons is avail or use lucide

export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-8 pt-12 pb-12">
            {/* 1. Avatar */}
            <Avatar className="h-28 w-28 border-2 border-muted shadow-sm">
                <AvatarImage src="https://github.com/shadcn.png" alt="Siddartha" /> {/* Replace with user image */}
                <AvatarFallback>SK</AvatarFallback>
            </Avatar>

            {/* 2. Headline */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl">
                Hi, I'm Siddartha <span className="inline-block animate-wave">👋</span> <br className="hidden sm:block" />
                A Full Stack web developer.
            </h1>

            {/* 3. Bio with Inline Badges */}
            <div className="max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed leading-8">
                <p>
                    I build interactive web apps using{" "}
                    <Badge variant="secondary" className="px-1 py-0 text-sm font-mono font-normal">
                        TypeScript
                    </Badge>
                    ,{" "}
                    <Badge variant="secondary" className="px-1 py-0 text-sm font-mono font-normal">
                        React
                    </Badge>
                    ,{" "}
                    <Badge variant="secondary" className="px-1 py-0 text-sm font-mono font-normal">
                        Next.js
                    </Badge>{" "}
                    and{" "}
                    <Badge variant="secondary" className="px-1 py-0 text-sm font-mono font-normal">
                        PostgreSQL
                    </Badge>
                    . With a focus on <span className="font-semibold text-foreground">UI</span> design. Enthusiastic about{" "}
                    <span className="font-semibold text-foreground">Competitive Programming</span>, driven by a keen eye for detail.
                </p>
            </div>

            {/* 4. Action Buttons */}
            <div className="flex gap-4">
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                    <FileTextIcon className="h-4 w-4" />
                    Resume / CV
                </Link>
                <Link
                    href="mailto:siddarthak03@gmail.com"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                    <MailIcon className="h-4 w-4" />
                    Get in touch
                </Link>
            </div>

            {/* 5. Social Icons */}
            <div className="flex gap-4 text-muted-foreground">
                <SocialIcon href="https://github.com/siddarthakarri" icon={<FaGithub className="h-5 w-5" />} />
                <SocialIcon href="https://linkedin.com/in/siddarthakarri" icon={<FaLinkedin className="h-5 w-5" />} />
                <SocialIcon href="https://twitter.com/IamSiddarthaK" icon={<FaTwitter className="h-5 w-5" />} />
                <SocialIcon href="https://instagram.com" icon={<FaInstagram className="h-5 w-5" />} />
            </div>
        </div>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <Link href={href} target="_blank" className="hover:text-foreground transition-colors">
            {icon}
        </Link>
    )
}
