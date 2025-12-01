"use client"

import * as React from "react"
import { Moon, Sun, Flame, Flashlight } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex gap-2 bg-background/50 backdrop-blur-sm p-2 rounded-full border border-border">
            <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                title="Light Mode"
            >
                <Sun className="h-5 w-5" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                title="Dark Mode"
            >
                <Moon className="h-5 w-5" />
            </button>
            <button
                onClick={() => setTheme("anger")}
                className={`p-2 rounded-full transition-all ${theme === 'anger' ? 'bg-red-600 text-white' : 'hover:bg-red-100 dark:hover:bg-red-900/30'}`}
                title="Anger Mode"
            >
                <Flame className="h-5 w-5" />
            </button>
            <button
                onClick={() => setTheme("spotlight")}
                className={`p-2 rounded-full transition-all ${theme === 'spotlight' ? 'bg-black text-white border border-white/20' : 'hover:bg-muted'}`}
                title="Pure Dark (Spotlight)"
            >
                <Flashlight className="h-5 w-5" />
            </button>
        </div>
    )
}
