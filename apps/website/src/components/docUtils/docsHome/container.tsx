"use client"
import React, { ReactNode } from "react";
import { DocSectionCard } from "./docsSectionCard";

export interface DocSectionCardData {
    title: ReactNode;
    desc: ReactNode;
}

interface DocsHomeContainerProps { }

const items: DocSectionCardData[] = []

export const DocsHomeContainer = (props: DocsHomeContainerProps) => {
    return <div className={"grid grid-cols-2 gap-8"}>{items.map((item, i) => <DocSectionCard item={item} key={`doc-section-${i}`}/>)}</div>;
};

DocsHomeContainer.displayName = "DocsHomeContainer";
