"use client";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { ArrowLeft, Construction } from "lucide-react";

export default function BlogPage() {
    return (
        <Container className="min-h-screen flex flex-col items-center justify-center py-20 text-center space-y-8">
            <div className="rounded-full bg-muted p-6">
                <Construction className="h-12 w-12 text-muted-foreground" />
            </div>

            <div className="space-y-4 max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight">
                    Coming Soon
                </h1>
                <p className="text-muted-foreground text-lg">
                    I'm currently writing some exciting articles about my development journey, competitive programming, and tech insights. Stay tuned!
                </p>
            </div>

            <div className="flex gap-4">
                <Button asChild variant="default">
                    <Link href="/">
                        Go Home
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/projects">
                        View Projects
                    </Link>
                </Button>
            </div>
        </Container>
    );
}
