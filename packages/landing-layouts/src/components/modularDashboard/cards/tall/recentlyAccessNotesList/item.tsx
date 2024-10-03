"use client";
import React from "react";
import { MathJax } from "better-react-mathjax";
import Link from "next/link";
import { ModularDashboardData } from "../../../types";

interface RecentlyAccessedNoteItemProps {
    item: ModularDashboardData["lastAccessNotes"][number];
}

/* PRIORITY: Change this to internal MDXClient component. */

export const RecentlyAccessedNoteItem = ({
    item,
}: RecentlyAccessedNoteItemProps) => {
    return (
        <Link
            href={item.href}
        >
            <MathJax
                inline
                dynamic={false}
                className={
                    "w-full max-w-full text-sm whitespace-break-spaces h-fit px-4 py-3 border border-border/30 hover:bg-secondary/80 hover:text-secondary-foreground transition-colors duration-200 [&_mjx-container]:inline-block"
                }
            >
                {item.title}
            </MathJax>
        </Link>
    );
};

RecentlyAccessedNoteItem.displayName = "RecentlyAccessedNoteItem";
