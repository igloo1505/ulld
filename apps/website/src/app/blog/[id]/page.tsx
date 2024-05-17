import React from "react";
import { allBlogPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDXArticle from "#/components/layouts/mdxArticle";
import { ArticleJsonLd, NextSeo } from "next-seo";
import staticContent from "staticContent";

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
            <ArticleJsonLd
                type="BlogPosting"
                url={`${staticContent.links.home}/blog`}
                title={`Uh Little Less Dum: ${article.title}`}
                description={article.description}
                author={article.author || staticContent.blog.defaultAuthor}
                datePublished={article.created}
                dateModified={article.updated}
                publisherName={staticContent.blog.publisherName}
                publisherLogo={staticContent.links.media.logo}
                useAppDir
                isAccessibleForFree
            />
            <MDXArticle mdx={article} />
        </>
    );
};

BlogArticlePage.displayName = "BlogArticlePage";

export default BlogArticlePage;
