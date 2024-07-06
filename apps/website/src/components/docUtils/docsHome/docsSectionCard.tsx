import React from "react";
import { DocSectionCardData } from "./container";
import Link from "next/link"

interface DocSectionCardProps {
    item: DocSectionCardData;
}

export const DocSectionCard = ({ item }: DocSectionCardProps) => {
    return (
        <Link href={item.href} className={"not-prose w-full h-full px-6 py-5 rounded border bg-card hover:border-primary transition-colors duration-300 cursor-pointer"}>
            <h2 className={"text-xl font-bold mb-4"}>{item.title}</h2>
            <p>{item.desc}</p>
        </Link>
    );
};

DocSectionCard.displayName = "DocSectionCard";
