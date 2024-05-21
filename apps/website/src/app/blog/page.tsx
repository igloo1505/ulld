import React from 'react'
import { allBlogPosts } from "contentlayer/generated"
import ComingSoon from '#/components/utility/comingSoon';
import Analytics from '#/components/utility/analytics';


/* export type BlogSearchParams = { */
/*     id?: string */
/* } */

interface BlogPageProps {
}

const BlogPage = (props: BlogPageProps) => {
        return (
        <>
            <Analytics
                pageView={{
                    path: "/blog",
                    title: "Blog Home",
                }}
            />
            <ComingSoon />
        </>
    );
}


BlogPage.displayName = "BlogPage"


export default BlogPage;
