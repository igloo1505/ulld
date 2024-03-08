"use client"
import OpenToggleArrow from '#/components/functionality/openToggleArrow'
import DynamicIcon from '#/components/icons/DynamicIcon'
import { stringToConsistentId } from '#/lib/formatting/general'
import type { AdmonitionProps, AdmonitionType } from '#/types/ui'
import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'
import React, { useId, useRef } from 'react'
/* TODO: Delete this if #/components/markdown/emeddedComponents/_FoldingAdmonition.tsx continues to work out. That component allows rsc's as children, but the transition isn't as smooth. */



const FoldableAdmonition = ({ children, type, title, dropdown, sidebar, open }: AdmonitionProps & { open?: boolean }) => {
    const ref = useRef<HTMLDivElement>(null!)
    const i = useId()
    const id = title ? stringToConsistentId(title) : i
    return (
        <Accordion.Root
            className={clsx(`rounded-lg  my-4 admonition ${type || "note"} overflow-hidden`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar && "w-full lg:w-[40%] lg:float-right lg:ml-4")}
            type="single"
            defaultValue={open ? id : undefined}
            collapsible
        >
            <Accordion.Item ref={ref} value={id} className={"group/fold"}>
                <Accordion.Header >
                    <div className={clsx("title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center")}>
                        <Accordion.Trigger className={"w-full flex flex-row flex-nowrap gap-2 justify-center items-center group"}>
                            {Boolean(type && type !== "plain") && <DynamicIcon name={type as AdmonitionType} />}
                            {title && <div className={"flex flex-row flex-wrap flex-grow font-bold tracking-wide"} dangerouslySetInnerHTML={{ __html: title }} />}
                            <OpenToggleArrow />
                        </Accordion.Trigger>
                    </div>
                </Accordion.Header>
                <Accordion.Content className={clsx("p-4 body bg-gray-100 dark:bg-gray-800 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden", type === "plain" && "bg-transparent dark:bg-transparent")}>
                    {children}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )

}


FoldableAdmonition.displayName = "FoldableAdmonition"



export default FoldableAdmonition;
