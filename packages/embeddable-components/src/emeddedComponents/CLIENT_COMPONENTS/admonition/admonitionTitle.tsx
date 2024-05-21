"use client";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";
import { cn } from "@ulld/utilities/cn";
import React, { useEffect } from "react";
import { DynamicIcon } from "@ulld/icons/dynamic";
import { AdmonitionType } from "@ulld/utilities/admonition/types";

export interface AdmonitionTitleProps {
    title: string;
    admonitionType?: AdmonitionType;
    dropdown?: boolean;
    groupId: string;
    titleBold?: boolean
}

export const AdmonitionTitle = ({
    title,
    admonitionType = "plain",
    dropdown,
    titleBold,
    groupId,
}: AdmonitionTitleProps) => {
    const { value, setValue, Component } = useDebounceMdxParse(title, 500, {
        bareAss: true
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
                    "w-full flex flex-row flex-nowrap gap-2 justify-start items-center"
                }
            >
                {Boolean(admonitionType && admonitionType !== "plain") && (
                    <DynamicIcon className={"w-4 h-4"} name={admonitionType} />
                )}
                <Component
                    className={
                        cn("admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath", titleBold && "font-semibold")
                    }
                />
            </div>
        </div>
    );
};

AdmonitionTitle.displayName = "AdmonitionTitle";
