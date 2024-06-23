import React, { ForwardedRef, forwardRef } from "react";
import data from "#/staticData/mdxData.json";
import NextLink from "next/link";
import clsx from 'clsx'
import {motion} from "framer-motion"

const Link = motion(NextLink)

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
        <div className={"w-full flex flex-col justify-start items-start text-foreground pt-8"} ref={ref}>
            <div className={"w-full px-4 flex flex-row justify-center items-center gap-1 mt-4"}>
                <motion.span 
                    className={"w-full flex-grow h-[1px] bg-muted"}
                    initial={{
                        scaleX: 0
                    }}
                    animate={{
                        scaleX: 1,
                        transformOrigin: "right"
                    }}
                    transition={{
                        delay: 0.5
                    }}
                />
                <motion.span 
                    className={"w-fit h-full text-muted-foreground"}
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                >
                Tags
                </motion.span>
                <motion.span
                    className={"w-full h-[1px] flex-grow bg-muted"}
                    initial={{
                        scaleX: 0
                    }}
                    animate={{
                        scaleX: 1,
                        transformOrigin: "left"
                    }}
                    transition={{
                        delay: 0.5
                    }}
                />
            </div>
            {tags.map((t, i) => {
                return <Link
                    key={t}
                    href={`/blog?${getSearchParams(activeTags, t)}`}
                    className={clsx("px-4 py-2 w-full text-sm transition-colors duration-300", activeTags.includes(t) ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
                    initial={{
                        /* x: -300, */
                        opacity: 0
                    }}
                    animate={{
                        /* x: 0, */
                        opacity: 1
                    }}
                    transition={{
                        delay: 1 + i * 0.15
                    }}
                >{t}</Link>;
            })}
        </div>
    );
});

TagList.displayName = "TagList";

export default TagList;
