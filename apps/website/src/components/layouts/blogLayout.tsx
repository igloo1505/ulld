import React, { ReactNode } from "react";
import BlogTagSideBar from "../pageSpecific/blog/tagSideBar/tagSideBar";

interface BlogLayoutProps {
  children: ReactNode;
}


/* RESUME: Come back here and handle the tag bar. Make it scroll with a paralax with framer motion. Make it stick to the top when scrolling further. Also, move it to a drawer on mobile devices. */

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className={"grid grid-cols-[300px_1fr] min-h-screen-noNav mt-[76px]"}>
      <BlogTagSideBar />
      <div
        className={
          "group/mdxLayout w-full mdx-wide flex flex-col justify-start items-center"
        }
      >
        {children}
      </div>
    </div>
  );
};

BlogLayout.displayName = "BlogLayout";

export default BlogLayout;
