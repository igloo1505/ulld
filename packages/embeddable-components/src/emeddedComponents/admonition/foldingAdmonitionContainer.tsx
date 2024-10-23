"use client";
import { cn } from "@ulld/utilities/cn";
import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FoldingAdmonitionTitle } from "./foldingAdmonitionTitle";
import { getIconName, type AdmonitionContainerProps } from "./admonitionUtils";

interface FoldingAdmonitionContainerProps extends AdmonitionContainerProps {
    open?: boolean;
    id: string;
    body: ReactNode
}

const getInitial = (dropdown?: boolean, _open?: boolean): "open" | "closed" => {
    if (dropdown) {
        return _open ? "open" : "closed";
    }
    return "open";
};

export const FoldingAdmonitionContainer = ({
    type,
    id,
    sidebar,
    dropdown,
    body,
    open: _open,
    title,
    footer,
    center,
    titleBold,
    icon
}: FoldingAdmonitionContainerProps): ReactNode => {
    const [open, setOpen] = useState(dropdown ? _open : true);

    const toggleOpen = (): void => {
        setOpen(!open);
    };

    const _initial = getInitial(dropdown, _open);

    const iconName = getIconName({
        icon,
        type
    })

    return (
        <div
            className={cn(
                `@container/admonition rounded-lg my-4 admonition ${type || "note"} overflow-hidden group/fold h-fit`,
                !dropdown && "open",
                type || "note",
                dropdown && "foldable",
                sidebar &&
                "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4",
            )}
            data-state={open ? "open" : "closed"}
            id={id}
        >
            <FoldingAdmonitionTitle
                dropdown={dropdown}
                iconName={iconName}
                onClick={dropdown ? toggleOpen : undefined}
                titleBold={titleBold}
            >
                {title}
            </FoldingAdmonitionTitle>
            <motion.div
                animate={open ? "open" : "closed"}
                className={cn(
                    "body admonition-body bg-gray-100 dark:bg-gray-800 origin-top relative overflow-hidden will-change-auto",
                    type === "plain" && "bg-transparent dark:bg-transparent",
                    center && "flex flex-col justify-center items-center gap-4 text-center"
                )}
                initial={_initial}
                variants={{
                    open: {
                        height: "auto",
                    },
                    closed: {
                        height: 0,
                    },
                }}
            >
                <div className="admonition-bodyContainer w-full h-full p-4 space-y-3">
                    {body}
                </div>
            </motion.div>
            {footer ? (
                <div className="w-full py-3 px-3 text-sm text-muted-foreground bg-muted">
                    {footer}
                </div>
            ) : null}
        </div>
    );
};

FoldingAdmonitionContainer.displayName = "FoldingAdmonitionContainer";
