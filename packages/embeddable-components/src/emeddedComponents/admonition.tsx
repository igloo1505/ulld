import React, { ReactNode } from 'react'
import FoldingAdmonition from './FoldingAdmonition';
import { DynamicIcon, ValidIconName } from '@ulld/icons/dynamic';
import { AdmonitionProps, AdmonitionType } from '@ulld/utilities/admonition/types';
import { stringToConsistentId } from '@ulld/state/formatting/general';
import { MdxContentSERVER } from '@ulld/render/mdx/server';
import { OpenToggleArrow } from './openToggleArrow';
import { getRandomId } from '@ulld/utilities/identity';
import cn from '@ulld/utilities/cn';



export const Admonition = async (props: AdmonitionProps) => {
    const id = props.id ? props.id : typeof props.title === "string" ? stringToConsistentId(props.title, "admon") : getRandomId()

    if (props.dropdown) {
        return <>
            <FoldingAdmonition
                {...props}
                id={id}
            />
        </>
    }

    const { children, type, title, dropdown, sidebar, footer } = props

    return (
        <div 
            className={cn(`rounded-lg my-4 admonition overflow-hidden group/fold h-fit`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar && "w-full @[1024px]/mdx:w-[33%] @[1024px]/mdx:float-right @[1024px]/mdx:ml-4")}
            id={id}
        >
            {Boolean(title || dropdown) && <div className={cn("title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center not-prose", dropdown ? "grid-cols-[1fr_2rem]" : "grid-cols-1")}>
                <div className={"w-full flex flex-row flex-nowrap gap-2 justify-center items-center"}>
                    {(Boolean(type && type !== "plain") || props.icon) && <DynamicIcon className={"w-4 h-4"} name={props.icon as ValidIconName || type as AdmonitionType} />}
                    {typeof props.title === "string" ? <MdxContentSERVER 
                        content={props.title}
                        className={"admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath"}
                    /> : props.title ? props.title : null}
                </div>
                {dropdown && <OpenToggleArrow groupId={id} />}
            </div>}
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
                    {footer}
                </div>
            )}
        </div>
    )
}


Admonition.displayName = "Admonition"
