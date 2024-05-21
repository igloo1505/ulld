"use client";
import clsx from "clsx";
import React from "react";
import FoldingAdmonition from "./foldingAdmonition";
import { AdmonitionProps } from "@ulld/utilities/admonition/types";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import { AdmonitionTitle } from "./admonitionTitle";
import { getRandomId } from "@ulld/utilities/identity";
import AdmonitionTitleNode from "./admonitionTitleNode";

export const Admonition = (props: AdmonitionProps) => {
    const id = props.id
        ? props.id
        : typeof props.title === "string"
            ? stringToConsistentId(props.title, "admon")
            : getRandomId();

    if (props.dropdown) {
        return (
            <>
                <FoldingAdmonition {...props} id={id} />
            </>
        );
    }

    const { children, type, title, dropdown, sidebar, footer } = props;

    return (
        <div
            className={clsx(
                `rounded-lg admonition group overflow-hidden my-4`,
                !dropdown && "open",
                type || "note",
                dropdown && "foldable",
                sidebar && "w-full my-3 @[1024px]/mdx:w-1/3 @[1024px]/mdx:float-right @[1024px]/mdx:ml-4" ,
            )}
            id={id}
        >
            {typeof title === "string" ? (
                <AdmonitionTitle
                    title={title || ""}
                    admonitionType={type}
                    dropdown={false}
                    groupId={id}
                    titleBold={props.titleBold}
                />
            ) : (
                <AdmonitionTitleNode
                    title={title || ""}
                    admonitionType={type}
                    dropdown={false}
                    groupId={id}
                    titleBold={props.titleBold}
                />
            )}
            <div
                className={clsx(
                    "prose dark:prose-invert p-4 body w-full min-w-full -translate-y-full scale-y-0 group-[.open]:translate-y-0 group-[.open]:scale-y-100 transition-transform duration-300 bg-gray-100 dark:bg-gray-800",
                    type === "plain" && "bg-transparent dark:bg-transparent",
                )}
            >
                {children}
            </div>
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

Admonition.displayName = "Admonition";
