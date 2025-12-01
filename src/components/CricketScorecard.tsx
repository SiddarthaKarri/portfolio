"use client";

import { Trophy, Activity, Target } from "lucide-react";

export function CricketScorecard() {
    return (
        <div className="bg-card border border-border rounded-lg p-4 max-w-md font-sans">
            <div className="flex justify-between items-center border-b border-border pb-2 mb-4">
                <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-lg">Career Match Summary</span>
                </div>
                <span className="text-xs text-green-500 animate-pulse">● LIVE</span>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-sm text-muted-foreground">Batsman</div>
                        <div className="text-xl font-bold">Siddartha</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-muted-foreground">Total Runs (Problems)</div>
                        <div className="text-3xl font-bold text-primary">2500+<span className="text-sm text-muted-foreground font-normal">*</span></div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center bg-muted/30 p-2 rounded">
                    <div>
                        <div className="text-xs text-muted-foreground">Strike Rate</div>
                        <div className="font-mono">100.0</div>
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <div className="font-mono text-green-400">Not Out</div>
                    </div>
                    <div>
                        <div className="text-xs text-muted-foreground">Format</div>
                        <div className="font-mono">T20 (Speed)</div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-sm font-semibold border-b border-border/50 pb-1">Innings Breakdown</div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center"><Target className="w-3 h-3 mr-2 text-orange-500" /> LeetCode</span>
                        <span className="font-mono">1650 (66%)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center"><Activity className="w-3 h-3 mr-2 text-cyan-500" /> CodeForces</span>
                        <span className="font-mono">800 (32%)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center"><Trophy className="w-3 h-3 mr-2 text-green-500" /> HackerRank</span>
                        <span className="font-mono">50 (2%)</span>
                    </div>
                </div>

                <div className="text-xs text-center text-muted-foreground italic mt-4">
                    "Life is a game of cricket. I just want to score a century in every format."
                </div>
            </div>
        </div>
    );
}
