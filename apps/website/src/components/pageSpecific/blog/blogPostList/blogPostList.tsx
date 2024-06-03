import React from "react";
import FeaturedBlogPost from "../featuredCard/main";
import { PostTypes } from "./types";
import { getAllBlogItems } from "../utils";

interface BlogPostListProps {
    tags: string[];
}

const priorityImages = 4


const getBlogPostsByTags = (tags: string[], allPosts: PostTypes[]): PostTypes[] => {
    return allPosts.filter((a) => {
        return a.tags?.some((b) => tags.includes(b));
    });
};

const BlogPostList = ({ tags = [] }: BlogPostListProps) => {
    const allPosts = getAllBlogItems()
    let posts = (tags.length === 0 ? allPosts : getBlogPostsByTags(tags, allPosts)).sort((a, b) => {
        if(new Date(a.updated || a.created) < new Date(b.updated || b.created)){
            return 1
        } else {
            return -1
        }
    })
    let featured = posts.find((a) => {
        return "featured" in a && a.featured
    })
    if(!featured){
        featured = posts.find((a) => {
            return ("images" in a && a.images && a.images.length > 0) || ("featuredEquation" in a && a.featuredEquation)
        })
    }

    return (
        <div className={"w-full flex flex-col justify-center items-center gap-6 my-6 px-6"}>
            {featured && <FeaturedBlogPost isFeatured post={featured} />}
            {(featured ? posts.filter((a) => a.id !== featured.id) : posts).map((p, i) => {
                return <FeaturedBlogPost post={p} imagePriority={i < priorityImages} key={p.id} />
            })}
        </div>
    );
};

BlogPostList.displayName = "BlogPostList";

export default BlogPostList;
