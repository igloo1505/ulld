"use client";
import React from "react";
import staticData from "#/staticData/mdxData.json";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SidebarSectionTitle from "./sectionTitle";

const BlogCategoryList = () => {
    let currentSearchParams = useSearchParams();
    let sp = new URLSearchParams();
    let activeCategory = currentSearchParams.get("category");
    let categories = activeCategory
        ? staticData.categories.filter((f) => f !== activeCategory)
        : staticData.categories;
    return (
        <>
            <SidebarSectionTitle>Categories</SidebarSectionTitle>
            <div className={"flex flex-col justify-start items-start space-y-2"}>
                {categories.map((c) => {
                    sp.set("category", c);
                    return (
                        <Link
                            key={`blog-category-${c}`}
                            className={"text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"} href={`/blog?${sp.toString()}`}>
                            {c}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

BlogCategoryList.displayName = "BlogCategoryList";

export default BlogCategoryList;
