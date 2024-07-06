import React from "react";
import { DocSectionCardData } from "./container";

interface DocSectionCardProps {
    item: DocSectionCardData;
}

export const DocSectionCard = ({ item }: DocSectionCardProps) => {
    return (
        <div className={"not-prose"}>
            <h2 className={"text-xl font-bold"}>{item.title}</h2>
            <p>{item.desc}</p>
        </div>
    );
};

DocSectionCard.displayName = "DocSectionCard";
