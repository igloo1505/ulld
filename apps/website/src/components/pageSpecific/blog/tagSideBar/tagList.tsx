import React from "react";
import Link from "next/link";
import staticData from "#/staticData/mdxData.json";
import SidebarSectionTitle from "./sectionTitle";

interface TagListProps {
    activeTags?: string[];
}


const maxTagItems = 8

const TagList = ({ activeTags = [] }: TagListProps) => {
    const tags = staticData.tags.map((t) => ({
        value: t,
        active: activeTags.includes(t),
    })).slice(0, maxTagItems)

    let extraTags = tags.length - maxTagItems

    let sp = new URLSearchParams();

    return (
        <>
            <SidebarSectionTitle>Tags</SidebarSectionTitle>
            <div
                className={"flex flex-row justify-start items-center gap-2 flex-wrap"}
            >
                {tags.map((t) => {
                    sp.set("tags", t.value);
                    return (
                        <Link
                            className={
                                "text-sm bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-200 px-2 py-1 rounded-lg"
                            }
                            key={`tag-${t.value}`}
                            href={`/blog?${sp.toString()}`}
                        >
                            {t.value}
                        </Link>
                    );
                })}
                {
                    extraTags > 0 && (
                        <div
                            className={
                                "text-sm bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-200 px-2 py-1 rounded-lg"
                            }
                            /* href={`/blog?${sp.toString()}`} */
                        >
                            {`+ ${extraTags} more`}
                        </div>
                    )
                }
            </div>
        </>
    );
};

TagList.displayName = "TagList";

export default TagList;
