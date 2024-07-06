"use client";
import clsx from "clsx";
import React from "react";
import { AdmonitionProps } from "@ulld/utilities/admonition/types";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import { AdmonitionTitle } from "./admonitionTitle";
import { getRandomId } from "@ulld/utilities/identity";
import AdmonitionTitleNode from "./admonitionTitleNode";
import FoldingAdmonition from "../../FoldingAdmonition";


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
            /* WARN: Disabled on 6-6-24 to use same styles as folding admonition that seems to work more reliably. Make sure all styles still transfer appropriately. */
            /* className={clsx( */
            /*     `rounded-lg admonition group overflow-hidden my-4`, */
            /*     !dropdown && "open", */
            /*     type || "note", */
            /*     dropdown && "foldable", */
            /*     sidebar && "w-full my-3 @[1024px]/mdx:w-1/3 @[1024px]/mdx:float-right @[1024px]/mdx:ml-4" , */
            /* )} */

            className={clsx(`rounded-lg  my-4 admonition ${type || "note"} overflow-hidden group/fold h-fit`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar && "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4")}
            id={id}
        >
            {typeof title === "string" ? (
                <AdmonitionTitle
                    title={title || ""}
                    admonitionType={type}
                    dropdown={props.dropdown}
                    groupId={id}
                    titleBold={props.titleBold}
                />
            ) : (
                <AdmonitionTitleNode
                    title={title || ""}
                    admonitionType={type}
                    dropdown={props.dropdown}
                    groupId={id}
                    titleBold={props.titleBold}
                />
            )}
            <div
                className={clsx(
                    "prose dark:prose-invert p-4 body w-full min-w-full h-auto bg-gray-100 dark:bg-gray-800",
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
