"use client";
import { DynamicIcon } from "@ulld/icons";
import { MathJax } from "better-react-mathjax";
import Link from "next/link";
import React from "react";

interface FeaturedBlogPostContentProps {
    title: string;
    summary: string;
    id: string
}

const FeaturedBlogPostContent = ({
    title,
    summary,
    id,
}: FeaturedBlogPostContentProps) => {
    let href = `/blog/${id}`
    return (
        <MathJax className={"flex-grow w-full"} hideUntilTypeset="first">
            <div className={"h-full w-full flex flex-col justify-start items-start p-4"}>
                <Link href={href}>
                <h2 className={"text-xl font-semibold"}>{title}</h2>
                </Link>
                <p className={"text-sm text-muted-foreground"}>{summary}</p>
                <Link
                    href={href}
                    className={"text-sm mt-4 flex flex-row justify-start items-center group/iconLink"}
                ><span>Read more</span> <DynamicIcon name="arrow-right" className={"h-4 text-muted-foreground group-hover/iconLink:text-foreground transition-colors duration-300"}/></Link>
            </div>
        </MathJax>
    );
};

FeaturedBlogPostContent.displayName = "FeaturedBlogPostContent";

export default FeaturedBlogPostContent;
