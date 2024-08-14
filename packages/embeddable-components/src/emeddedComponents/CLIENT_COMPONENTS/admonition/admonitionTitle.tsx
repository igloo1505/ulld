"use client";
import React, { HTMLProps } from "react";
import { cn } from "@ulld/utilities/cn";
import { AdmonitionType } from "@ulld/utilities/admonition/types";
import { useMathjaxDynamicParse } from "@ulld/hooks/useMathjaxDynamicParse";
import { useMemoizedIcon } from "../../../hooks/useMemoizedIcon";
import { ChevronDown } from "lucide-react";
import { MathJax } from "better-react-mathjax";

export interface AdmonitionTitleProps extends HTMLProps<HTMLDivElement> {
    title: string;
    admonitionType?: AdmonitionType;
    dropdown?: boolean;
    groupId: string;
    titleBold?: boolean;
}

export const AdmonitionTitle = ({
    title,
    admonitionType = "plain",
    dropdown,
    titleBold,
    groupId,
    ...props
}: AdmonitionTitleProps) => {
    useMathjaxDynamicParse(title);

    const icon = useMemoizedIcon(admonitionType, "w-4 h-4");

    return (
        <div
            {...props}
            className={cn(
                "title not-prose w-full flex flex-row justify-start items-center text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center",
                dropdown ? "grid-cols-[1fr_2rem] cursor-pointer" : "grid-cols-1",
                props.className,
            )}
        >
            <div
                className={
                    "w-full flex flex-row flex-nowrap gap-2 justify-start items-center"
                }
            >
                {Boolean(admonitionType && admonitionType !== "plain") && icon}
                <div
                    className={cn(
                        "admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath relative",
                        titleBold && "font-semibold",
                        dropdown && "mr-8",
                    )}
                >
                    <MathJax>{title}</MathJax>
                </div>
                {dropdown && (
                    <ChevronDown
                        className={
                            "absolute right-4 top-[50%] translate-y-[-50%] group-data-[state=open]/fold:rotate-180 transition-transform duration-300"
                        }
                    />
                )}
            </div>
        </div>
    );
};

AdmonitionTitle.displayName = "AdmonitionTitle";
