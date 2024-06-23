import React, { ReactNode } from "react";
import BlogTagSideBar from "../pageSpecific/blog/tagSideBar/tagSideBar";
import clsx from "clsx";


interface BlogLayoutProps {
  children: ReactNode;
}

/* RESUME: Come back here and handle the tag bar. Make it scroll with a paralax with framer  Make it stick to the top when scrolling further. Also, move it to a drawer on mobile devices. */

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div
      id="blog-layout"
      className={
        "group/blogLayout group/backdropParent flex flex-row justify-start items-start min-h-screen-noNav mt-[76px]"
      }
    >
        <BlogTagSideBar />
      <div
        className={clsx(
          "group/mdxLayout w-screen mdx-wide flex flex-col justify-start items-end p-6 px-8 blogMobile:px-12",
        )}
      >
        {children}
      </div>
    </div>
  );
};

BlogLayout.displayName = "BlogLayout";


export default BlogLayout;
