"use client";
import React from "react";
import staticData from "#/staticData/mdxData.json";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SidebarSectionTitle from "./sectionTitle";
import { CheckIcon } from "lucide-react";
import clsx from "clsx";

const BlogCategoryList = () => {
    let currentSearchParams = useSearchParams();
    let sp = new URLSearchParams();
    let activeCategory = currentSearchParams.get("category");
    return (
        <>
            <SidebarSectionTitle className={"hidden lgr:inline-block"}>Categories</SidebarSectionTitle>
            <div className={"flex flex-row justify-center gap-x-3 lgr:flex-col lgr:justify-start items-start lgr:space-y-2"}>
                {staticData.categories.map((c) => {
                    let isActive = activeCategory ? activeCategory === c : false
                    if(isActive){
                        sp.delete("category")
                    } else {
                        sp.set("category", c);
                    }
                    return (
                        <Link
                            key={`blog-category-${c}`}
                            className={clsx("hover:text-foreground transition-colors duration-200 text-sm", isActive ? "text-foreground" : "text-muted-foreground")} href={`/blog${isActive ? "" : `?${sp.toString()}`}`}>
                            <span className={"w-4 inline-block"}>
                            {isActive && <CheckIcon className={"h-3 w-3"} />}
                            </span>
                            <span className={"inline-block"}>
                            {c}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

BlogCategoryList.displayName = "BlogCategoryList";

export default BlogCategoryList;
