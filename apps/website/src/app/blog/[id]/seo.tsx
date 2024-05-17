"use client"
import { BlogPost } from 'contentlayer/generated'
import { ArticleJsonLd } from 'next-seo'
import article from 'next-seo/lib/jsonld/article'
import React from 'react'
import staticContent from "staticContent"



interface BlogPostSEOProps {
    article: BlogPost
}

const BlogPostSEO = (props: BlogPostSEOProps) => {
return (
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
)
}


BlogPostSEO.displayName = "BlogPostSEO"


export default BlogPostSEO;
