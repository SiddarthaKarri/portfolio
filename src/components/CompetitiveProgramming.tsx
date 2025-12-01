"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";

const achievements = [
    {
        platform: "ICPC",
        title: "Regionalist",
        detail: "Asia West Amritapuri - Qualified 2025",
        icon: <Trophy className="w-8 h-8 text-yellow-500" />,
        color: "border-yellow-500/50 bg-yellow-500/10",
        textColor: "text-yellow-500",
        link: undefined,
        imageSrc: undefined,
    },
    {
        platform: "LeetCode",
        title: "Knight",
        detail: "Rating: 1905+ | Top 5%",
        icon: undefined,
        imageSrc: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg",
        link: "https://leetcode.com/u/siddarthak",
        color: "border-orange-500/50 bg-orange-500/10",
        textColor: "text-orange-500",
    },
    {
        platform: "CodeForces",
        title: "Specialist",
        detail: "Max Rating: 1427",
        icon: undefined,
        imageSrc: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg",
        link: "https://codeforces.com/profile/siddarthakarri",
        color: "border-cyan-500/50 bg-cyan-500/10",
        textColor: "text-cyan-500",
    },
    {
        platform: "CodeChef",
        title: "2 Star",
        detail: "Rating: 1593",
        icon: undefined,
        imageSrc: "https://cdn.codechef.com/images/cc-logo.svg",
        link: "https://www.codechef.com/users/siddarthakarri",
        color: "border-amber-700/50 bg-amber-700/10",
        textColor: "text-amber-700",
    },
    {
        platform: "GeeksForGeeks",
        title: "Institute Rank 555",
        detail: "Consistent Solver",
        icon: undefined,
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
        link: "https://www.geeksforgeeks.org/user/siddarthakarri/",
        color: "border-green-500/50 bg-green-500/10",
        textColor: "text-green-500",
    },
    {
        platform: "HackerRank",
        title: "Gold Badge",
        detail: "Achieved Gold Badge",
        icon: undefined,
        imageSrc: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg",
        link: "https://www.hackerrank.com/profile/ksiddartha",
        color: "border-purple-500/50 bg-purple-500/10", // Assuming a color for HackerRank
        textColor: "text-purple-500",
    },
    {
        platform: "GDGoC",
        title: "Co-Organizer",
        detail: "GDGoC 2025",
        icon: <Trophy className="w-8 h-8 text-blue-500" />,
        color: "border-blue-500/50 bg-blue-500/10",
        textColor: "text-blue-500",
        link: undefined,
        imageSrc: undefined,
    },
];

export function CompetitiveProgramming() {
    return (
        <section id="cp" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                >
                    Competitive Programming
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.platform}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className={`p-6 rounded-2xl border backdrop-blur-sm ${item.color} transition-all shadow-lg hover:shadow-xl`}
                        >

                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-foreground">{item.platform}</h3>
                                        {item.icon || (item.imageSrc && <img src={item.imageSrc} alt={item.platform} className="w-8 h-8 object-contain" />)}
                                    </div>
                                    <div className={`text-2xl font-bold mb-2 ${item.textColor}`}>
                                        {item.title}
                                    </div>
                                    <p className="text-muted-foreground text-sm font-medium">
                                        {item.detail}
                                    </p>
                                </a>
                            ) : (
                                <>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-foreground">{item.platform}</h3>
                                        {item.icon || (item.imageSrc && <img src={item.imageSrc} alt={item.platform} className="w-8 h-8 object-contain" />)}
                                    </div>
                                    <div className={`text-2xl font-bold mb-2 ${item.textColor}`}>
                                        {item.title}
                                    </div>
                                    <p className="text-muted-foreground text-sm font-medium">
                                        {item.detail}
                                    </p>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}