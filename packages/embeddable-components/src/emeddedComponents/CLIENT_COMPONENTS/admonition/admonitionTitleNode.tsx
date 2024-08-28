"use client"
import cn from "@ulld/utilities/cn";
import React, { ReactNode } from "react";
import { AdmonitionTitleProps } from "./admonitionTitle";
import { useMathjaxDynamicParse } from "@ulld/hooks/useMathjaxDynamicParse";
import { MathJax } from "better-react-mathjax";
import { useMemoizedIcon } from "../../../hooks/useMemoizedIcon";


interface AdmonitionTitleNodeProps extends Omit<AdmonitionTitleProps, "title"> {
    title: ReactNode;
}

declare global {
    interface Window {
        MathJax: any;
    }
}

const AdmonitionTitleNode = ({
    title,
    admonitionType = "plain",
    dropdown,
    groupId,
    titleBold,
    ...props
}: AdmonitionTitleNodeProps) => {
    useMathjaxDynamicParse(title);
    const icon = useMemoizedIcon(props.icon || admonitionType, "w-4 h-4")

    return (
        <div
            {...props}
            className={cn(
                "title not-prose w-full flex flex-row justify-start items-center text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10]",
                dropdown ? "grid-cols-[1fr_2rem]" : "grid-cols-1",
                props.className
            )}
        >
            <MathJax>
                <div
                    className={cn(
                        "w-full math flex flex-row flex-nowrap gap-2 justify-start items-center",
                        titleBold && "font-semibold",
                    )}
                >
                    {Boolean(admonitionType && admonitionType !== "plain") && (
                    icon
                    )}
                    {title}
                </div>
            </MathJax>
        </div>
    );
};

AdmonitionTitleNode.displayName = "AdmonitionTitleNode";

export default AdmonitionTitleNode;
