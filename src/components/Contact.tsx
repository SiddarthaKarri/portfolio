import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
    return (
        <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
            <p className="max-w-md text-zinc-600 dark:text-zinc-400 text-pretty">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4">
                <SocialLink href="mailto:siddarthak03@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                <SocialLink href="https://linkedin.com/in/siddarthakarri" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                <SocialLink href="https://twitter.com/IamSiddarthaK" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                <SocialLink href="https://github.com/siddarthakarri" icon={<Github className="w-5 h-5" />} label="GitHub" />
            </div>
        </div>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:scale-110 hover:text-black dark:hover:text-white transition-all shadow-sm"
            title={label}
        >
            {icon}
        </a>
    );
}