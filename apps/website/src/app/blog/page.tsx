import React from "react";
import BlogPostList from "#/components/pageSpecific/blog/blogPostList/blogPostList";
import { getAllBlogPages } from "#/fumaDocs/utils/getConcatenatedPages";
import BlogLayout from "#/components/layouts/blogLayout";

export type BlogSearchParams = {
    tags?: string[];
};

interface BlogPageProps {
    searchParams: BlogSearchParams;
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
    let tags = searchParams.tags
        ? Array.isArray(searchParams.tags)
            ? searchParams.tags
            : [searchParams.tags]
        : [];

    /* TODO: Enable pagination here. This can wait until there are most posts, but this definitely needs to be handled. */
    const allPosts = getAllBlogPages();
    return (
        <BlogLayout>
            <BlogPostList allPosts={allPosts} tags={tags} />
        </BlogLayout>
    );
};

BlogPage.displayName = "BlogPage";

export default BlogPage;
