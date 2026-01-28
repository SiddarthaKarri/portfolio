"use client";
import { Trophy } from "lucide-react";

const achievements = [
    {
        platform: "Codeforces",
        rating: "Specialist (1450)",
        rank: "Top 15% in India",
        link: "https://codeforces.com/profile/siddartha_k",
    },
    {
        platform: "LeetCode",
        rating: "Guardian (2200)",
        rank: "Global Top 1%",
        link: "https://leetcode.com/siddartha_k",
    },
    {
        platform: "CodeChef",
        rating: "4 Star (1850)",
        rank: "Div 2 Top 500",
        link: "https://codechef.com/users/siddartha_k",
    },
];

export function CompetitiveProgramming() {
    return (
        <div className="flex flex-col gap-6">
            {achievements.map((item, i) => (
                <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 -mx-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md group-hover:bg-white dark:group-hover:bg-black transition-colors text-zinc-600 dark:text-zinc-400">
                            <Trophy className="w-4 h-4" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground text-sm">{item.platform}</h3>
                            <p className="text-xs text-zinc-500">{item.rating}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-mono text-zinc-400 group-hover:text-foreground transition-colors">{item.rank}</span>
                    </div>
                </a>
            ))}
        </div>
    );
}