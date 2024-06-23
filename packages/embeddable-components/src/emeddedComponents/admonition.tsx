import clsx from 'clsx'
import React, { ReactNode } from 'react'
import FoldingAdmonition from './FoldingAdmonition';
import { DynamicIcon } from '@ulld/icons/dynamic';
import { AdmonitionProps, AdmonitionType } from '@ulld/utilities/admonition/types';
import { stringToConsistentId } from '@ulld/state/formatting/general';
import { MdxContentSERVER } from '@ulld/render/mdx/server';
import { OpenToggleArrow } from './openToggleArrow';
import { getRandomId } from '@ulld/utilities/identity';



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
        <div className={clsx(`rounded-lg admonition group overflow-hidden`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar ? "w-full mb-3 lg:w-[33%] lg:float-right lg:ml-4" : "my-3")} id={id}>
            {Boolean(title || dropdown) && <div className={clsx("title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center", dropdown ? "grid-cols-[1fr_2rem]" : "grid-cols-1")}>
                <div className={"w-full flex flex-row flex-nowrap gap-2 justify-center items-center"}>
                    {Boolean(type && type !== "plain") && <DynamicIcon className={"w-4 h-4"} name={type as AdmonitionType} />}
                    {typeof props.title === "string" ? <MdxContentSERVER 
                        content={props.title}
                        className={"admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath"}
                    /> : props.title ? props.title : null}
                </div>
                {dropdown && <OpenToggleArrow groupId={id} />}
            </div>}
            <div className={clsx("p-4 space-y-3 body admonition-body -translate-y-full scale-y-0 group-[.open]:translate-y-0 group-[.open]:scale-y-100 transition-transform duration-300 bg-gray-100 dark:bg-gray-800", type === "plain" && "bg-transparent dark:bg-transparent")}>
                {children}
            </div>
            {footer && <div className={clsx("w-full py-3 px-3 text-sm text-muted-foreground bg-muted")}>{footer}</div>}
        </div>
    )
}


Admonition.displayName = "Admonition"
