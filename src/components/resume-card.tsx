"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
    logoUrl: string;
    altText: string;
    title: string;
    subtitle?: string;
    href?: string;
    badges?: readonly string[];
    period: string;
    description?: string;
}
export const ResumeCard = ({
    logoUrl,
    altText,
    title,
    subtitle,
    href,
    badges,
    period,
    description,
}: ResumeCardProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Simple Avatar/Badge/Card implementations just in case user doesn't have shadcn components yet
    // Using inline fallbacks if components are missing, but assuming structure is there
    return (
        <div className="block cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex">
                <div className="flex-none">
                    <div className="h-12 w-12 rounded-full border bg-muted/50 overflow-hidden flex items-center justify-center">
                        <img src={logoUrl} alt={altText} className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="flex-grow ml-4 group-hover/timeline:translate-x-3 transition duration-200">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                            {title}
                            <ChevronRightIcon className={cn("size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100", isExpanded ? "rotate-90" : "rotate-0")} />
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{period}</div>
                    </div>
                    {subtitle && (
                        <div className="font-sans text-xs">{subtitle}</div>
                    )}
                </div>
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-2 text-xs sm:text-sm"
            >
                {description}
            </motion.div>
        </div>
    );
};
