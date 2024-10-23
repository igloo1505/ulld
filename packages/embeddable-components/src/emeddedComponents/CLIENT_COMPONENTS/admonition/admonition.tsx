"use client";
import React from "react";
import { AdmonitionProps } from "@ulld/utilities/admonition/types";
import { stringToConsistentId } from "@ulld/state/formatting/general";
import { AdmonitionTitle } from "./admonitionTitle";
import { getRandomId } from "@ulld/utilities/identity";
import AdmonitionTitleNode from "./admonitionTitleNode";
import FoldingAdmonition from "../../FoldingAdmonition";
import cn from "@ulld/utilities/cn";
import { ValidIconName } from "@ulld/icons";
import { MdxContentCLIENT } from "@ulld/render/mdx";


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
            className={cn(`rounded-lg my-4 admonition overflow-hidden group/fold h-fit`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar && "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4")}
            id={id}
        >
            {typeof title === "string" ? (
                <AdmonitionTitle
                    title={title || ""}
                    admonitionType={type}
                    dropdown={props.dropdown}
                    groupId={id}
                    titleBold={props.titleBold}
                    icon={props.icon as ValidIconName}
                />
            ) : (
                <AdmonitionTitleNode
                    title={title || ""}
                    admonitionType={type}
                    dropdown={props.dropdown}
                    groupId={id}
                    titleBold={props.titleBold}
                    icon={props.icon as ValidIconName}
                />
            )}
            <div
                className={cn(
                    "prose dark:prose-invert p-4 body w-full min-w-full h-auto bg-gray-100 dark:bg-gray-800",
                    type === "plain" && "bg-transparent dark:bg-transparent",
                )}
            >
                {children}
            </div>
            {footer && (
                <div
                    className={cn(
                        "w-full py-3 px-3 text-sm text-muted-foreground bg-muted",
                    )}
                >
                    {typeof footer === "string" ? <MdxContentCLIENT content={footer} /> : footer}
                </div>
            )}
        </div>
    );
};

Admonition.displayName = "Admonition";
