"use client";

import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import { Link } from "next-view-transitions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/common/Container";

export default function CompetitiveProgramming() {
    return (
        <Container className="py-16">
            <div className="space-y-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Competitive Programming
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        My problem solving journey on various platforms.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* LeetCode Card */}
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">LeetCode</CardTitle>
                            <SiLeetcode className="h-5 w-5 text-[#FFA116]" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold">750+</span>
                                <span className="text-xs text-muted-foreground">Problems Solved</span>
                            </div>
                            <div className="mt-4 flex flex-col gap-1 pt-4 border-t">
                                <span className="text-sm font-medium">Max Rating: <span className="text-foreground">1939</span></span>
                                <span className="text-xs text-muted-foreground">Knight Badge</span>
                            </div>
                            <div className="mt-4">
                                <Link
                                    href="https://leetcode.com/siddarthak/"
                                    className="text-sm text-blue-500 hover:underline inline-flex items-center gap-1"
                                    target="_blank"
                                >
                                    View Profile →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Codeforces Card */}
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Codeforces</CardTitle>
                            <SiCodeforces className="h-5 w-5 text-[#1F8ACB]" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold">1464</span>
                                <span className="text-xs text-muted-foreground">Current Rating</span>
                            </div>
                            <div className="mt-4 flex flex-col gap-1 pt-4 border-t">
                                <span className="text-sm font-medium">Rank: <span className="text-green-500">Specialist</span></span>
                                <span className="text-xs text-muted-foreground">Max: 1494</span>
                            </div>
                            <div className="mt-4">
                                <Link
                                    href="https://codeforces.com/profile/siddarthakarri"
                                    className="text-sm text-blue-500 hover:underline inline-flex items-center gap-1"
                                    target="_blank"
                                >
                                    View Profile →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* CodeChef Card */}
                    <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">CodeChef</CardTitle>
                            <SiCodechef className="h-5 w-5 text-[#5B4638]" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold">1630</span>
                                <span className="text-xs text-muted-foreground">Current Rating</span>
                            </div>
                            <div className="mt-4 flex flex-col gap-1 pt-4 border-t">
                                <span className="text-sm font-medium">Star: <span className="text-purple-500">3★</span></span>
                                <span className="text-xs text-muted-foreground">Max: 1639</span>
                            </div>
                            <div className="mt-4">
                                <Link
                                    href="https://www.codechef.com/users/siddarthakarri"
                                    className="text-sm text-blue-500 hover:underline inline-flex items-center gap-1"
                                    target="_blank"
                                >
                                    View Profile →
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Container>
    );
}
