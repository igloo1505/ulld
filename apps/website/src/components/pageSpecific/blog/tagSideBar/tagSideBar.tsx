"use client";
import React, { useEffect, useRef, useState } from "react";
import TagListComponent from "./tagList";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const TagList = motion(TagListComponent);

interface BlogTagSideBarProps {}

/* PRIORITY: Move this scroll listener to framer-motion when back online and capable of looking up docs. This is handled inside the react render function, so framer-motion will likely be much more performant. */

const BlogTagSideBar = (props: BlogTagSideBarProps) => {
  const [containerY, setContainerY] = useState<number | undefined>(undefined);
  const sp = useSearchParams();
  const ref = useRef<HTMLDivElement>(null!);
  let t = sp.getAll("tags");

  let activeTags: string[] = Array.isArray(t)
    ? t
    : t !== null
      ? [t]
      : ([] as string[]);

  const handleScroll = () => {
    let scroll = {
      y: document.body.scrollTop,
      height: document.body.scrollHeight,
      target: ref.current.getBoundingClientRect(),
    };
    if (scroll.target.y < 0) {
      setContainerY(scroll.target.y * -1);
    } else {
      setContainerY(undefined);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={"h-full max-h-full overflow-y-auto border-r"}
      ref={ref}
    >
      <TagList
        activeTags={activeTags}
        animate={{
          y: containerY,
          transition: {
            bounce: 0,
          },
        }}
        transition={{
          bounce: 0,
        }}
      />
    </motion.div>
  );
};

BlogTagSideBar.displayName = "BlogTagSideBar";

export default BlogTagSideBar;
