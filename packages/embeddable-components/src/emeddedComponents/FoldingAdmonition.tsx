"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { AdmonitionProps } from "@ulld/utilities/admonition/types";
import { AdmonitionTitle } from "./CLIENT_COMPONENTS/admonition/admonitionTitle";
import AdmonitionTitleNode from "./CLIENT_COMPONENTS/admonition/admonitionTitleNode";
import { motion } from "framer-motion";

interface FoldingAdmonitionProps extends AdmonitionProps {
    open?: boolean;
    id: string;
}

const FoldingAdmonition = ({
    type,
    id,
    sidebar,
    dropdown,
    children,
    open: _open,
    title,
    footer,
    titleBold,
}: FoldingAdmonitionProps) => {
    const [open, setOpen] = useState(dropdown ? _open : true);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div
            className={clsx(
                `@container/admonition rounded-lg my-4 admonition ${type || "note"} overflow-hidden group/fold h-fit`,
                !dropdown && "open",
                type || "note",
                dropdown && "foldable",
                sidebar && "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4",
            )}
            id={id}
            data-state={open ? "open" : "closed"}
        >
            {typeof title === "string" ? (
                <AdmonitionTitle
                    title={title || ""}
                    admonitionType={type}
                    dropdown={dropdown}
                    groupId={id}
                    titleBold={titleBold}
                    onClick={dropdown ? toggleOpen : undefined}
                />
            ) : (
                <AdmonitionTitleNode
                    title={title || ""}
                    admonitionType={type}
                    dropdown={dropdown}
                    groupId={id}
                    titleBold={titleBold}
                    onClick={dropdown ? toggleOpen : undefined}
                />
            )}
            <motion.div
                className={clsx(
                    "body admonition-body bg-gray-100 dark:bg-gray-800 origin-top relative overflow-hidden will-change-auto",
                    type === "plain" && "bg-transparent dark:bg-transparent",
                )}
                initial={dropdown ? (_open ? "open" : "closed") : "open"}
                animate={open ? "open" : "closed"}
                variants={{
                    open: {
                        height: "auto",
                    },
                    closed: {
                        height: 0,
                    },
                }}
            >
                <div className={"admonition-bodyContainer w-full h-full p-4 space-y-3"}>
                {children}
                </div>
            </motion.div>
            {footer && (
                <div
                    className={clsx(
                        "w-full py-3 px-3 text-sm text-muted-foreground bg-muted",
                    )}
                >
                    {footer}
                </div>
            )}
        </div>
    );
};

FoldingAdmonition.displayName = "FoldingAdmonition";

export default FoldingAdmonition;
