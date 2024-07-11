"use client";
import React, { useRef } from "react";
import FeaturedBlogPost from "../featuredCard/main";
import { PageType } from "#/types/general";
import { logger } from "@ulld/logger/client"

interface BlogPostListProps {
    tags: string[];
    allPosts: PageType[];
}

const priorityImages = 4;

const getBlogPostsByTags = (
    tags: string[],
    allPosts: BlogPostListProps["allPosts"],
): BlogPostListProps["allPosts"] => {
    console.log("allPosts: ", allPosts)
    /* TODO: Fix this. */
    return allPosts
    /* return allPosts.filter((a) => { */
    /*     return a.data.tags?.some((b) => tags.includes(b)); */
    /* }); */
};

const defaultDate = new Date("1-1-1970")

const forceDate = (val?: string | null) => {
    return val ? new Date(val) : defaultDate        
}

const BlogPostList = ({ tags = [], allPosts }: BlogPostListProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    /* const transition = useRef<string>(""); */
    /* const timer = useRef<NodeJS.Timeout | null>(null); */
    let withPriority: typeof allPosts = []
    let withoutPriority: typeof allPosts = []
    allPosts.forEach((p) => {
     if(typeof p.data.priority === "number"){
            withPriority.push(p)
        } else {
            withoutPriority.push(p)
        }
    })
    let postsWithPriority = withPriority.sort((a, b) => {
        if(!a.data.priority){
            return b.data.priority || -1
        }
        return (a.data.priority < (b.data.priority as number)) ? 1 : -1
    })

    let postsWithoutPriority = (
        tags.length === 0 ? withoutPriority : getBlogPostsByTags(tags, allPosts)
    ).sort((a, b) => {
        if(forceDate(a.data.updated) < forceDate(b.data.updated)){
            return 1
        } else {
            return -1
        }
    });

    const posts = [...postsWithPriority, ...postsWithoutPriority]
    /* const handleResize = () => { */
    /*     if ( */
    /*         transition.current === "" && */
    /*         ref.current.style.transition && */
    /*         ref.current.style.transition !== "" */
    /*     ) { */
    /*         transition.current = ref.current.style.transition; */
    /*     } */
    /*     ref.current.style.transition = "" */
    /*     timer.current = setTimeout(() => {  */
    /*         ref.current.style.transition = transition.current */
    /*     }, 250); */
    /* }; */

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
        >
            {posts.map(
                (p, i) => {
                    return (
                        <FeaturedBlogPost
                            post={p}
                            imagePriority={i < priorityImages}
                            key={p.data.id || `blog-post-${i}`}
                        />
                    );
                },
            )}
        </div>
    );
};

BlogPostList.displayName = "BlogPostList";

export default BlogPostList;
