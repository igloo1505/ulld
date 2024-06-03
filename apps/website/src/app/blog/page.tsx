import React from "react";
import BlogPostList from "#/components/pageSpecific/blog/blogPostList/blogPostList";

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
    return <BlogPostList tags={tags} />;
};

BlogPage.displayName = "BlogPage";

export default BlogPage;
