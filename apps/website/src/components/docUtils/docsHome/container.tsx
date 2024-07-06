"use client";
import React, { ReactNode } from "react";
import { DocSectionCard } from "./docsSectionCard";
import { LogoAsText } from "#/components/general/logoAsText";
import { Vortex } from "./background";

export interface DocSectionCardData {
    title: ReactNode;
    desc: ReactNode;
    href: string;
}

interface DocsHomeContainerProps { }

const items: DocSectionCardData[] = [
    {
        title: "User",
        desc: (
            <div>
                Setup your application and get the most from <LogoAsText />.
            </div>
        ),
        href: "/docs/user",
    },
    {
        title: "Developer",
        desc: "Extend your own application or help others by publishing your plugin.",
        href: "/docs/developer",
    },
];

export const DocsHomeContainer = (props: DocsHomeContainerProps) => {
    return (
        <Vortex
            backgroundColor="#020817"
            hueRange={30}
            className={"flex justify-center items-center"}
        >
            <div
                className={
                    "grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent max-w-[min(calc(100%-4rem),1024px)]"
                }
            >
                {items.map((item, i) => (
                    <DocSectionCard item={item} key={`doc-section-${i}`} />
                ))}
            </div>
        </Vortex>
    );
};

DocsHomeContainer.displayName = "DocsHomeContainer";
