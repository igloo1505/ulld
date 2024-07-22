import React from "react";
import TagList from "./tagList";
import BlogCategoryList from "./categoryList";
import { Separator } from "@ulld/tailwind/separator";

/* PRIORITY: Come back here first thing when on power again and handle the height discrepency when scrolling. It's almost not noticable on the blog page, but on a actual blog entry it's a nightmare. */
/* TODO: Add click outside listener conditional on blog entry page... not blog list page. */
const BlogSideBar = () => {
    return (
        <div 
            className={"w-full h-fit md:top-0 lgr:sticky lgr:h-screen-noNav lgr:place-self-start pt-16 lgr:py-4 pb-6 px-2 group-[.hideBlogSep]/blog-page:pt-8 group-[.hideBlogSep]/blog-page:pb-0"}
            style={{
                gridColumn: "blogSidebar",
                gridRow: "main"
            }}
        >
            <BlogCategoryList
            />
            <Separator
                id={"blog-sidebar-separator"}
                className={"my-4 group-[.hideBlogSep]/blog-page:opacity-0 group-[.hideBlogSep]/blog-page:my-2"}
            />
            <TagList />
        </div>
    );
};

BlogSideBar.displayName = "BlogTagSideBar";

export default BlogSideBar;
