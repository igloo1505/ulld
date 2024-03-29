"use client";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";
import { cn } from "@ulld/utilities/cn";
import React, { useEffect } from "react";
import { AdmonitionType } from "../../../../../types/general";
import { DynamicIcon } from "../../../../icons/DynamicIcon";

interface AdmonitionTitleProps {
    title: string;
    admonitionType: AdmonitionType;
    dropdown?: boolean;
    groupId: string;
}

export const AdmonitionTitle = ({
    title,
    admonitionType,
    dropdown,
    groupId,
}: AdmonitionTitleProps) => {
    const { value, setValue, Component } = useDebounceMdxParse(title, 500, {
        display: "inline",
    });
    useEffect(() => {
        setValue(title);
    }, [title]);

    return (
        <div
            className={cn(
                "title w-full flex flex-row justify-start items-center text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center",
                dropdown ? "grid-cols-[1fr_2rem]" : "grid-cols-1",
            )}
        >
            <div
                className={
                    "w-full flex flex-row flex-nowrap gap-2 justify-center items-center"
                }
            >
                {Boolean(admonitionType && admonitionType !== "plain") && (
                    <DynamicIcon className={"w-4 h-4"} name={admonitionType} />
                )}
                <Component
                    className={
                        "admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath"
                    }
                />
            </div>
        </div>
    );
};

AdmonitionTitle.displayName = "AdmonitionTitle";
