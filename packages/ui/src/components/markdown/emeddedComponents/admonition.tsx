import OpenToggleArrow from '#/components/functionality/openToggleArrow'
import DynamicIcon from '#/components/icons/DynamicIcon'
import clsx from 'clsx'
import React from 'react'
import type { AdmonitionProps, AdmonitionType } from '#/types/ui';
import { stringToConsistentId } from '#/lib/formatting/general';
import FoldingAdmonition from './FoldingAdmonition';
import { serverClient } from '#/trpc/serverClient';
import AppendStyleSheet from '#/components/util/appendStyleSheet';



const Admonition = async (_props: AdmonitionProps) => {
    const id = _props.id ? _props.id : _props.title ? stringToConsistentId(_props.title, "admon") : `${new Date().valueOf()}`
    let props = {
        ..._props,
    }
    let _title = _props.title ? await serverClient.equations.stringWithMathToLatex({ content: _props.title, options: { inline: true } }) : { content: "", styles: undefined }
    props.title = _title.content

    if (props.dropdown) {
        return <>
            <AppendStyleSheet content={_title.styles} />
            <FoldingAdmonition
                {...props}
                id={id}
            />
        </>
    }

    const { children, type, title, dropdown, sidebar, footer } = props
    return (
        <div className={clsx(`rounded-lg admonition group overflow-hidden`, !dropdown && "open", type || "note", dropdown && "foldable", sidebar ? "w-full mb-3 lg:w-[33%] lg:float-right lg:ml-4" : "my-3")} id={title ? stringToConsistentId(title) : id}>
            {Boolean(title || dropdown) && <div className={clsx("title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center", dropdown ? "grid-cols-[1fr_2rem]" : "grid-cols-1")}>
                <div className={"w-full flex flex-row flex-nowrap gap-2 justify-center items-center"}>
                    {Boolean(type && type !== "plain") && <DynamicIcon className={"w-4 h-4"} name={type as AdmonitionType} />}
                    <div className={"admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath"} dangerouslySetInnerHTML={{ __html: props.title || "" }} />
                </div>
                {dropdown && <OpenToggleArrow groupId={id} />}
            </div>}
            <div className={clsx("p-4 body -translate-y-full scale-y-0 group-[.open]:translate-y-0 group-[.open]:scale-y-100 transition-transform duration-300 bg-gray-100 dark:bg-gray-800", type === "plain" && "bg-transparent dark:bg-transparent")}>
                {children}
            </div>
            {footer && <div className={clsx("w-full py-3 px-3 text-sm text-muted-foreground bg-muted")}>{footer}</div>}
        </div>
    )
}


Admonition.displayName = "Admonition"


export default Admonition;
