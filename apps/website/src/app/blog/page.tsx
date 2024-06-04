import React from "react";
import BlogPostList from "#/components/pageSpecific/blog/blogPostList/blogPostList";
import { getAllBlogItems } from "#/components/pageSpecific/blog/utils";

export type BlogSearchParams = {
    tags?: string[];
}

interface BlogPageProps {
    searchParams: BlogSearchParams
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
    let tags = searchParams.tags
        ? Array.isArray(searchParams.tags)
            ? searchParams.tags
            : [searchParams.tags]
        : [];

    /* TODO: Enable pagination here. This can wait until there are most posts, but this definitely needs to be handled. */
    const allPosts = getAllBlogItems();
    return <BlogPostList
        allPosts={allPosts}
        tags={tags}
    />;
};

BlogPage.displayName = "BlogPage";

export default BlogPage;
