"use client"
import React, { ReactNode, useState } from "react";
import BlogTagSideBar from "../pageSpecific/blog/tagSideBar/tagSideBar";
import {motion} from 'framer-motion'
import clsx from 'clsx'

interface BlogLayoutProps {
  children: ReactNode;
}


/* RESUME: Come back here and handle the tag bar. Make it scroll with a paralax with framer motion. Make it stick to the top when scrolling further. Also, move it to a drawer on mobile devices. */

const BlogLayout = ({ children }: BlogLayoutProps) => {
    const [open, setOpen] = useState(true);
  return (
    <motion.div
            id="blog-layout"
            className={clsx("group/blogLayout flex flex-row justify-start items-start min-h-screen-noNav mt-[76px]", !open && "noSidebar")}
            animate={open ? "open" : "closed"}
        >
      <BlogTagSideBar open={open} setOpen={setOpen} />
      <motion.div
        className={
          clsx("group/mdxLayout w-full mdx-wide flex flex-col justify-start items-center p-6 lg:px-12", !open && "lg:w-screen")
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

BlogLayout.displayName = "BlogLayout";

export default BlogLayout;
