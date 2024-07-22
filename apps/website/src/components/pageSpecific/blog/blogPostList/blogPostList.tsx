"use client";
import React, { useRef } from "react";
import { BlogSearchParams } from "#/app/blog/page";
import { getAllBlogPages } from "#/fumaDocs/utils/getConcatenatedPages";
import BlogPostSummaryCard from "../blogSummaryCard/main";

interface BlogPostListProps {
    searchParams: BlogSearchParams;
}

const itemsPerPage = 10;

const getBlogPostListItems = (searchParams: BlogSearchParams) => {
    let items = getAllBlogPages();
    if (searchParams.category) {
        items = items.filter(
            (f) => f.data.category && f.data.category === searchParams.category,
        );
    }
    let page = searchParams.page || 1;
    if (typeof page !== "number") {
        page = parseInt(page);
    }

    let startIndex = (page - 1) * itemsPerPage;
    return {
        items: items.slice(startIndex, startIndex + itemsPerPage).map((x) => {
            let itemDate = x.data.updated || x.data.created;
            return {
                ...x,
                itemDate: itemDate
                    ? new Date(itemDate.replaceAll("-", "/"))
                    : new Date("1/1/1970"),
            };
        }),
        currentPage: page,
        showPagination: items.length > itemsPerPage,
    };
};

const BlogPostList = ({ searchParams }: BlogPostListProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const { items, currentPage, showPagination } =
        getBlogPostListItems(searchParams);

    return (
        <div
            ref={ref}
            className={"w-full flex flex-col justify-start items-center space-y-6 py-6 px-6"}
        >
            {items
                .sort((a, b) => b.itemDate.valueOf() - a.itemDate.valueOf())
                .map((p) => {
                    return <BlogPostSummaryCard key={`blog-summary-${p.url}`} item={p} />;
                })}
        </div>
    );
};

BlogPostList.displayName = "BlogPostList";

export default BlogPostList;
