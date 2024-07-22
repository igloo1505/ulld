"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import staticData from "#/staticData/mdxData.json";
import SidebarSectionTitle from "./sectionTitle";
import BlogTagSelectInput from "./tagSelect";
import { useSearchParams } from "next/navigation";
import cn from "@ulld/utilities/cn";

interface TagListProps { }

const maxTagItems = 8;

const TagList = ({ }: TagListProps) => {
    const currentSearchParams = useSearchParams();
    let activeTags = currentSearchParams.getAll("tags");
    const tags = staticData.tags
        .map((t) => ({
            value: t,
            active: activeTags.includes(t),
        }))
        .slice(0, maxTagItems);

    let extraTags = tags.length - maxTagItems;
    let cat = currentSearchParams.get("category");


    return (
        <>
            <SidebarSectionTitle className={"hidden md:inline-block"}>Tags</SidebarSectionTitle>
            <BlogTagSelectInput 
                classes={{
                    container: "md:hidden",
                    trigger: "md:hidden"
                }}
                activeTags={activeTags}
            />
            <div
                className={
                    "hidden md:flex flex-row justify-start items-center gap-2 flex-wrap"
                }
            >
                {tags.map((t, i) => {
                    let sp = new URLSearchParams();
                    if (cat) {
                        sp.set("category", cat);
                    }
                    for (const t of activeTags) {
                        sp.append("tags", t);
                    }
                    if (t.active) {
                        sp.delete("tags", t.value);
                    } else {
                        sp.append("tags", t.value);
                    }
                    return (
                        <Link
                            className={cn(
                                "text-sm bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-200 px-2 py-1 rounded-lg",
                                t.active &&
                                "bg-background border text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                            )}
                            key={`tag-${t.value}`}
                            href={`/blog${sp.has("tags") ? `?${sp.toString()}` : ""}`}
                        >
                            {t.value}
                        </Link>
                    );
                })}
                {extraTags > 0 && (
                    <div
                        className={
                            "text-sm bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-200 px-2 py-1 rounded-lg"
                        }
                    /* href={`/blog?${sp.toString()}`} */
                    >
                        {`+ ${extraTags} more`}
                    </div>
                )}
            </div>
        </>
    );
};

TagList.displayName = "TagList";

export default TagList;
