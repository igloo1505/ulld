"use client"
import clsx from "clsx"
import { MouseEventHandler } from "react"
import { DynamicIcon } from "../.."
import { OpenToggleArrow } from "../../menus/openToggleArrow"
import { AdmonitionProps, AdmonitionType } from "../../../types"



interface SSRFoldingAdmonitionObserverProps extends Omit<AdmonitionProps, "children"> {
    id: string
    dropdown?: boolean
}

export const SSRFoldingAdmonitionTitle = ({ id, dropdown, title, type }: SSRFoldingAdmonitionObserverProps) => {
    const admonitionOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (!dropdown) return
        let em = document.getElementById(id)
        if (!em) return
        let state = em.getAttribute("data-state")
        em.setAttribute("data-state", state === "closed" ? "open" : "closed")
    }

    return (<div
        className={clsx("title admonition-title text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center grid-cols-[1fr_2rem] cursor-pointer")}
        onClick={admonitionOnClick}
    >
        <div className={"w-full h-full flex flex-row justify-start items-center gap-3"}>
            {Boolean(type && type !== "plain") && <DynamicIcon className={"w-4 h-4"} name={type as AdmonitionType} />}
            {title && <div className={"flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath"} dangerouslySetInnerHTML={{ __html: title }} />}
        </div>
        <OpenToggleArrow />
    </div>)
}


SSRFoldingAdmonitionTitle.displayName = "SSRFoldingAdmonitionObserver"
