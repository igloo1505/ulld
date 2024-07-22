import React from "react";
import TagList from "./tagList";
import BlogCategoryList from "./categoryList";
import { Separator } from "@ulld/tailwind/separator";

/* PRIORITY: Come back here first thing when on power again and handle the height discrepency when scrolling. It's almost not noticable on the blog page, but on a actual blog entry it's a nightmare. */
/* TODO: Add click outside listener conditional on blog entry page... not blog list page. */
const BlogSideBar = () => {
    return (
        <div 
            className={"w-full h-fit md:top-0 lgr:sticky lgr:h-screen-noNav lgr:place-self-start py-4 px-2"}
            style={{
                gridColumn: "blogSidebar",
                gridRow: "main"
            }}
        >
            <BlogCategoryList />
            <Separator className={"my-4"} />
            <TagList />
        </div>
    );
};

BlogSideBar.displayName = "BlogTagSideBar";

export default BlogSideBar;
