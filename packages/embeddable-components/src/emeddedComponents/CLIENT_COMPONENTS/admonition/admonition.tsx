"use client"
import clsx from 'clsx'
import React from 'react'
import FoldingAdmonition from './foldingAdmonition';
import { AdmonitionProps } from '@ulld/utilities/admonition/types';
import { stringToConsistentId } from '@ulld/state/formatting/general';
import { AdmonitionTitle } from './admonitionTitle';



export const Admonition = async (_props: AdmonitionProps) => {
    const id = _props.id ? _props.id : _props.title ? stringToConsistentId(_props.title, "admon") : `${new Date().valueOf()}`
    let props: any = {
        ..._props,
    }
    /* let _title = _props.title ? await client.mdx.parseMdxString({ content: _props.title, display: "inline" }) : undefined */
    /* props.title = _title?.compiledSource */

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
        <div className={clsx(`rounded-lg admonition group overflow-hidden`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar ? "w-full mb-3 lg:w-[33%] lg:float-right lg:ml-4" : "my-3")} id={title ? stringToConsistentId(title) : id}>
            <AdmonitionTitle 
                title={title || ""}
                admonitionType={type}
                dropdown={false}
                groupId={id}
            />
            <div className={clsx("p-4 body -translate-y-full scale-y-0 group-[.open]:translate-y-0 group-[.open]:scale-y-100 transition-transform duration-300 bg-gray-100 dark:bg-gray-800", type === "plain" && "bg-transparent dark:bg-transparent")}>
                {children}
            </div>
            {footer && <div className={clsx("w-full py-3 px-3 text-sm text-muted-foreground bg-muted")}>{footer}</div>}
        </div>
    )
}


Admonition.displayName = "Admonition"
