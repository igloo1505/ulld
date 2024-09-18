"use client";
import React, { useRef } from "react";
import { getAllBlogPages } from "#/fumaDocs/utils/getConcatenatedPages";
import BlogPostSummaryCard from "../blogSummaryCard/main";
import { useSearchParams } from "next/navigation";
import PaginationGroup from "@ulld/ui/paginationGroup";
import { getPaginationTemplateString } from "@ulld/utilities/paginationUtils";

interface BlogPostListProps { }

const itemsPerPage = 8;

const getBlogPostListItems = (
    category?: string | null,
    tags: string[] = [],
    page: number = 1,
) => {
    let _items = getAllBlogPages();
    let pinned: typeof _items = [];
    let items: typeof _items = [];
    for (const k of _items) {
        if (k.data.blogPin) {
            pinned.push(k);
        } else {
            items.push(k);
        }
    }
    if (category) {
        items = items.filter(
            (f) => f.data.category && f.data.category === category,
        );
    }
    if (tags && tags.length) {
        items = items.filter((item) => {
            return Boolean(
                item.data.tags && item.data.tags.some((t) => tags.includes(t)),
            );
        });
    }
    items = items
        .map((x) => {
            let _itemDate = x.data.updated || x.data.created;
            let itemDate = _itemDate
                ? new Date(_itemDate.replaceAll("-", "/"))
                : new Date("1/1/1970");
            return {
                ...x,
                itemDate,
            };
        })
        .sort((a, b) => b.itemDate.valueOf() - a.itemDate.valueOf());

    pinned = pinned.sort((a, b) => a.data.blogPin! - b.data.blogPin!);
    const startIndex = (page - 1) * itemsPerPage;
    const allItems = [...pinned, ...items]
    return {
        items: allItems.slice(startIndex, startIndex + itemsPerPage),
        currentPage: page,
        showPagination: allItems.length > itemsPerPage,
        totalItems: allItems.length,
    };
};

const BlogPostList = ({ }: BlogPostListProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const sp = useSearchParams();
    let page: string | number | undefined | null = sp.get("page");
    if (typeof page === "string") {
        page = parseInt(page);
    }
    let category = sp.get("category");
    let tags = sp.getAll("tags");
    const { items, currentPage, showPagination, totalItems } =
        getBlogPostListItems(category, tags, page || undefined);
    const paginationTemplateString = getPaginationTemplateString((n) => {
        let s = new URLSearchParams();
        if (category) {
            s.set("category", category);
        }
        for (const t of tags) {
            s.append("tags", t);
        }
        s.set("page", n);
        return `/blog?${s.toString()}`;
    });

    return (
        <div
            ref={ref}
            className={
                "w-full h-full flex flex-col justify-start items-center space-y-6 gap-y-16 py-6 px-6 lgr:place-self-start"
            }
            style={{
                gridColumn: "blogList",
                gridRow: "main",
            }}
        >
            <div
                className={
                    "flex flex-col justify-start items-center gap-y-16 py-6 flex-grow"
                }
            >
                {items.map((p) => {
                    return <BlogPostSummaryCard key={`blog-summary-${p.url}`} item={p} />;
                })}
            </div>
            {showPagination && (
                <PaginationGroup
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    hrefTemplate={paginationTemplateString}
                />
            )}
        </div>
    );
};

BlogPostList.displayName = "BlogPostList";

export default BlogPostList;
