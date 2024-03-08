import { searchByTagUrl } from '#/actions/client/async'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'



interface TagBarProps {
    start?: boolean
    children: {
        props: {
            children: string
        }
    }
}


const TagbarTag = ({ tag }: { tag: string }) => {
    return (
        <Link href={searchByTagUrl(tag)} className={"bg-primary hover:bg-primary/70 transition-colors duration-200 text-primary-foreground px-2 py-[0.3rem] text-[0.8rem] rounded-lg"}>{tag}</Link>
    )
}

const TagBar = (props: TagBarProps) => {
    let children = typeof props.children === "string" ? props.children : props.children.props.children
    const getTags = (c: string) => {
        return c.split(/\s/gmi).filter((t) => t !== "").map((s) => s.split(" ")).flat().map((s) => s.trim())
    }
    return (
        <div className={clsx("w-full flex flex-row flex-wrap items-center gap-4 my-4", props.start ? "justify-start" : "justify-center")}>
            {getTags(children).map((t) => <TagbarTag tag={t} key={`tag-${t}`} />)}
        </div>
    )
}


TagBar.displayName = "TagBar"


export default TagBar;
