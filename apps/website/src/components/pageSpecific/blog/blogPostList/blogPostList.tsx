"use client"
import React from "react";
import FeaturedBlogPost from "../featuredCard/main";
import { PostTypes } from "./types";
import { getAllBlogItems } from "../utils";
import { motion } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";

interface BlogPostListProps {
    tags: string[];
    allPosts: ReturnType<typeof getAllBlogItems>
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
    const vp = useViewport(true)
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

    return (
        <motion.div
            className={"w-full lg:max-h-[calc(100vh-116px)] lg:overflow-y-auto flex flex-col justify-start items-center gap-6"}
            variants={{
                open: {
                    width: "100%",
                },
                closed: {
                    width: vp ? vp?.window.width - 64 : "calc(100vw - 4rem)"
                }
            }}
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
        </motion.div>
    );
};

BlogPostList.displayName = "BlogPostList";

export default BlogPostList;
