import React from "react";
import { allBlogPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXArticle from "#/components/layouts/mdxArticle";
import { ArticleJsonLd, NextSeo } from "next-seo";
import staticContent from "staticContent";
import Analytics from "#/components/utility/analytics";

interface BlogArticlePageProps {
    params: {
        id: string;
    };
}

/* TODO: Come back and generate all static data here like was done in original app. Now SEO actually matters. Add NextSEO here as well so Google can display articles properly. */
const BlogArticlePage = ({ params: { id } }: BlogArticlePageProps) => {
    let article = allBlogPosts.find((post) => post.id === id);
    if (!article) return notFound();
    return (
        <>
            <Analytics 
                pageView={{
                    path: `/blog/${id}`,
                    title: `Blog View: ${article.title}`
                }}
            />
            <MDXArticle mdx={article} />
        </>
    );
};

BlogArticlePage.displayName = "BlogArticlePage";

export default BlogArticlePage;
