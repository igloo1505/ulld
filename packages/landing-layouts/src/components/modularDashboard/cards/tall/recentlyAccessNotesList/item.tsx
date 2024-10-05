import React from "react";
import Link from "next/link";
import { ModularDashboardData } from "../../../types";
import { MdxContentRSC } from "@ulld/render/mdx-rsc";

interface RecentlyAccessedNoteItemProps {
    item: ModularDashboardData["lastAccessNotes"][number];
}

/* PRIORITY: Change this to internal MDXClient component. */

export const RecentlyAccessedNoteItem = ({
    item,
}: RecentlyAccessedNoteItemProps) => {
    return (
        <Link href={item.href}>
            <MdxContentRSC
                inline
                className={
                    "w-full max-w-full text-sm whitespace-break-spaces h-fit px-4 py-3 border border-border/30 hover:bg-secondary/80 hover:text-secondary-foreground transition-colors duration-200 [&_mjx-container]:inline-block not-prose"
                }
                content={item.title}
            />
        </Link>
    );
};

RecentlyAccessedNoteItem.displayName = "RecentlyAccessedNoteItem";
