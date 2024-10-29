import React from "react";
import BlogPostList from "#/components/pageSpecific/blog/blogPostList/blogPostList";
import BlogSideBar from "#/components/pageSpecific/blog/tagSideBar/blogSideBar";
import { BlogSearchParams } from "../../types/general";


interface BlogPageProps {
    searchParams: BlogSearchParams;
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
    return (
        <div
            id="blog-page-container"
            className={
                "group/blog-page w-full bg-background flex flex-col justify-start items-center mt-[76px]"
            }
        >
            <div
                className={
                    "relative w-full max-w-[1440px] px-4 md:px-12 lg:px-16 min-h-screen-noNav flex flex-col justify-start items-center lgr:grid"
                }
                style={{
                    gridTemplateColumns: "[blogList] 1fr [blogSidebar] 350px",
                    gridTemplateRows: "[main] 1fr",
                }}
            >
                <BlogSideBar 
                />
                    <BlogPostList
                        searchParams={searchParams}
                    />
            </div>
        </div>
    );
};

BlogPage.displayName = "BlogPage";

export default BlogPage;
