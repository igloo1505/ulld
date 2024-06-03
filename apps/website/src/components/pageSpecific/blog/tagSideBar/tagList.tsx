import React, { ForwardedRef, forwardRef } from "react";
import data from "#/staticData/mdxData.json";
import Link from "next/link";
import clsx from 'clsx'

interface TagListProps { 
    activeTags: string[]
}


const getSearchParams = (activeTags: string[], clickedTag: string) => {
    let newTags = activeTags.includes(clickedTag) ? activeTags.filter((a) => a !== clickedTag) : [...activeTags, clickedTag] 
        
    let sp = new URLSearchParams()
    for (const k of newTags){
        sp.append("tags", k)
    }
    return sp.toString()
}

const TagList = forwardRef(({ activeTags = [] }: TagListProps, ref: ForwardedRef<HTMLDivElement>) => {
     
    const tags = data.tags;

    return (
        <div className={"w-full flex flex-col justify-start items-start text-foreground"} ref={ref}>
            <div className={"w-full px-4 flex flex-row justify-center items-center gap-1 mt-4"}>
                <span className={"w-full flex-grow h-[1px] bg-muted"}/>
                <span className={"w-fit h-full text-muted-foreground"}>
                Tags
                </span>
                <span className={"w-full h-[1px] flex-grow bg-muted"}/>
            </div>
            {tags.map((t) => {
                return <Link
                    key={t}
                    href={`/blog?${getSearchParams(activeTags, t)}`}
                    className={clsx("px-4 py-2 w-full text-sm transition-colors duration-300", activeTags.includes(t) ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
                >{t}</Link>;
            })}
        </div>
    );
});

TagList.displayName = "TagList";

export default TagList;
