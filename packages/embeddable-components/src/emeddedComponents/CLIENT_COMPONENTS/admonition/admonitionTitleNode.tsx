"use client";
import type { ReactNode } from "react";
import React from "react";
import cn from "@ulld/utilities/cn";
import { DynamicIcon } from "@ulld/icons";
import type { AdmonitionTitleProps } from "./admonitionTitle";
import { getIconName } from "./utils";

interface AdmonitionTitleNodeProps extends Omit<AdmonitionTitleProps, "title"> {
    title: ReactNode;
}

/* declare global { */
/*   interface Window { */
/*     MathJax: unknown; */
/*   } */
/* } */

const AdmonitionTitleNode = ({
    title,
    admonitionType = "plain",
    dropdown,
    titleBold,
    ...props
}: AdmonitionTitleNodeProps): ReactNode => {
    const iconName = getIconName({
        icon: props.icon,
        admonitionType,
    });
    /* const icon = useMemoizedIcon(props.icon || admonitionType, ); */

    return (
        <div
            {...props}
            className={cn(
                "title not-prose w-full flex flex-row justify-start items-center text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10]",
                dropdown ? "grid-cols-[1fr_2rem]" : "grid-cols-1",
                props.className,
            )}
        >
            <div
                className={cn(
                    "w-full math flex flex-row flex-nowrap gap-2 justify-start items-center",
                    titleBold && "font-semibold",
                )}
            >
                {iconName ? <DynamicIcon className="w-4 h-4" name={iconName} /> : null}
                {title}
            </div>
        </div>
    );
};

AdmonitionTitleNode.displayName = "AdmonitionTitleNode";

export default AdmonitionTitleNode;
