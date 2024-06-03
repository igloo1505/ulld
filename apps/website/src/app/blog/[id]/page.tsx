import React from "react";
import { notFound } from "next/navigation";
import MDXArticle from "#/components/layouts/mdxArticle";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { getAllBlogItems } from "#/components/pageSpecific/blog/utils";

interface BlogArticlePageProps {
    params: {
        id: string;
    };
}

/* TODO: Come back and generate all static data here like was done in original app. Now SEO actually matters. Add NextSEO here as well so Google can display articles properly. */
const BlogArticlePage = ({ params: { id } }: BlogArticlePageProps) => {
    const allBlogPosts = getAllBlogItems()
    let article = allBlogPosts.find((post) => post.id === id);
    if (!article) return notFound();
    return (
        <MathjaxProvider>
            <MDXArticle mdx={article} />
        </MathjaxProvider>
    );
};

BlogArticlePage.displayName = "BlogArticlePage";

export default BlogArticlePage;
