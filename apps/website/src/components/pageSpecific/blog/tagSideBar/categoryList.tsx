"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import staticData from "#/staticData/mdxData.json";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SidebarSectionTitle from "./sectionTitle";
import { CheckIcon } from "lucide-react";
import clsx from "clsx";
import BlogCategoryMobileSelect from "./categorySelect";

const BlogCategoryList = () => {
    const [collapseToDropdown, setCollapseToDropdown] = useState<boolean | null>(null);
    let currentSearchParams = useSearchParams();
    const ref = useRef<HTMLDivElement>(null!);
    const router = useRouter();
    const selectRef = useRef<HTMLDivElement>(null!);
    let totalCategoryWidth = useMemo(() => {
        return (
            staticData.categories.map((t) => t.length).reduce((a, b) => a + b) * 8 +
            staticData.categories.length * 24 +
            64
        );
    }, []);

    let sp = new URLSearchParams();
    let activeCategory = currentSearchParams.get("category");

    const handleCollapse = () => {
        console.log("totalCategoryWidth: ", totalCategoryWidth)
        setCollapseToDropdown(
            window.innerWidth < 768 && totalCategoryWidth >= window.innerWidth,
        );
    };

    useEffect(() => {
        document.getElementById("blog-page-container")?.classList[collapseToDropdown ? "add" : "remove"]("hideBlogSep")
    }, [collapseToDropdown])

    useEffect(() => {
        handleCollapse()
        window.addEventListener("resize", handleCollapse);
        return () => window.removeEventListener("resize", handleCollapse);
    }, []);

    const getCategorySearchParams = (c: string) => {
        let isActive = activeCategory ? activeCategory === c : false;
        if (isActive) {
            sp.delete("category");
        } else {
            sp.set("category", c);
        }
        return isActive ? "" : `?${sp.toString()}`;
    };

    const handleCatChange = (c: string) => {
        router.push(`/blog${getCategorySearchParams(c)}`);
    };

    if(typeof collapseToDropdown !== "boolean"){
        return null
    }

    return (
        <>
            <SidebarSectionTitle className={"hidden lgr:inline-block"}>
                Categories
            </SidebarSectionTitle>
            {collapseToDropdown ? (
                <BlogCategoryMobileSelect
                    ref={selectRef}
                    onCategoryChange={handleCatChange}
                />
            ) : (
                <div
                    ref={ref}
                    className={
                        "flex flex-row justify-center gap-x-3 flex-wrap lgr:flex-col lgr:justify-start items-start lgr:space-y-2"
                    }
                >
                    {staticData.categories.map((c) => {
                        let isActive = activeCategory ? activeCategory === c : false;
                        return (
                            <Link
                                key={`blog-category-${c}`}
                                className={clsx(
                                    "hover:text-foreground whitespace-nowrap transition-colors duration-200 text-sm",
                                    isActive ? "text-foreground" : "text-muted-foreground",
                                )}
                                href={`/blog${getCategorySearchParams(c)}`}
                            >
                                <span className={"w-4 inline-block"}>
                                    {isActive && <CheckIcon className={"h-3 w-3"} />}
                                </span>
                                <span className={"inline-block"}>{c}</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};

BlogCategoryList.displayName = "BlogCategoryList";

export default BlogCategoryList;
