"use client";
import { BlogPost } from "contentlayer/generated";
import { ArticleJsonLd } from "next-seo";
import React from "react";
import staticContent from "staticContent";

interface BlogPostSEOProps {
    article: BlogPost;
}


/* TODO: Rework this to fit jsonLD in next.js docs. Get rid of next-seo completely. */
const BlogPostSEO = ({ article }: BlogPostSEOProps) => {
    return (
        <ArticleJsonLd
            type="BlogPosting"
            url={`${staticContent.links.home}/blog`}
            title={`Uh Little Less Dum: ${article.title}`}
            description={article.description}
            author={article.author || staticContent.blog.defaultAuthor}
            authorName={article.author || staticContent.blog.defaultAuthor}
            datePublished={article.created}
            dateModified={article.updated}
            publisherName={staticContent.blog.publisherName}
            publisherLogo={staticContent.links.media.logo}
            images={article.images || []}
            useAppDir
            isAccessibleForFree
        />
    );
};


BlogPostSEO.displayName = "BlogPostSEO";

export default BlogPostSEO;
