"use client";
import React, { useEffect, useRef } from "react";
import FeaturedBlogPost from "../featuredCard/main";
import { PostTypes } from "./types";
import { getAllBlogItems } from "../utils";
import {
    motion,
    motionValue,
    useIsomorphicLayoutEffect,
    useTransform,
} from "framer-motion";

interface BlogPostListProps {
    tags: string[];
    allPosts: ReturnType<typeof getAllBlogItems>;
}

const priorityImages = 4;

const getBlogPostsByTags = (
    tags: string[],
    allPosts: PostTypes[],
): PostTypes[] => {
    return allPosts.filter((a) => {
        return a.tags?.some((b) => tags.includes(b));
    });
};

const BlogPostList = ({ tags = [], allPosts }: BlogPostListProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const transition = useRef<string>("");
    const timer = useRef<NodeJS.Timeout | null>(null);
    let posts = (
        tags.length === 0 ? allPosts : getBlogPostsByTags(tags, allPosts)
    ).sort((a, b) => {
        if (new Date(a.updated || a.created) < new Date(b.updated || b.created)) {
            return 1;
        } else {
            return -1;
        }
    });
    let featured = posts.find((a) => {
        return "featured" in a && a.featured;
    });
    if (!featured) {
        featured = posts.find((a) => {
            return (
                ("images" in a && a.images && a.images.length > 0) ||
                ("featuredEquation" in a && a.featuredEquation)
            );
        });
    }

    const handleResize = () => {
        if (
            transition.current === "" &&
            ref.current.style.transition &&
            ref.current.style.transition !== ""
        ) {
            transition.current = ref.current.style.transition;
        }
        ref.current.style.transition = ""
        timer.current = setTimeout(() => { 
            ref.current.style.transition = transition.current
        }, 250);
    };

    /* useEffect(() => { */
    /*     window.addEventListener("resize", handleResize); */
    /*     return () => window.removeEventListener("resize", handleResize); */
    /* }, []); */

    return (
        <div
            ref={ref}
            className={
                "w-full blogMobile:w-[calc(100vw-112px)] group-[.open]/blogLayout:blogMobile:w-[calc(100vw-412px)] group-[.transitioning]/blogLayout:blogMobile:transition-[width] group-[.transitioning]/blogLayout:blogMobile:duration-300 h-fit space-y-6 flex flex-col justify-center items-end"
            }
        /* variants={{ */
        /*     open: { */
        /*         width: vpWidth.current ? vpWidth.current - 396 : "100%", */
        /*     }, */
        /*     closed: { */
        /*         width: vpWidth.current ? vpWidth.current - 96 : "calc(100vw - 4rem)", */
        /*     }, */
        /* }} */
        >
            {featured && <FeaturedBlogPost isFeatured post={featured} />}
            {(featured ? posts.filter((a) => a.id !== featured.id) : posts).map(
                (p, i) => {
                    return (
                        <FeaturedBlogPost
                            post={p}
                            imagePriority={i < priorityImages}
                            key={p.id}
                        />
                    );
                },
            )}
        </div>
    );
};

BlogPostList.displayName = "BlogPostList";

export default BlogPostList;
