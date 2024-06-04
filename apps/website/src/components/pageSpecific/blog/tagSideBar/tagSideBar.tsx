"use client";
import React, { useRef } from "react";
import TagList from "./tagList";
import { useSearchParams } from "next/navigation";
import { XIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  navbarButtonClasses,
} from "#/components/layouts/navbar/navbarButtonGroup";
import clsx from "clsx";
import NavbarButtonPortal from "#/components/utility/portals/navbar";

interface BlogTagSideBarProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

/* PRIORITY: Move this scroll listener to framer-motion when back online and capable of looking up docs. This is handled inside the react render function, so framer-motion will likely be much more performant. */

const BlogTagSideBar = ({ open, setOpen }: BlogTagSideBarProps) => {
  const sp = useSearchParams();
  let t = sp.getAll("tags");
  const ref = useRef<HTMLDivElement>(null!);
  const scroll = useScroll({
    target: ref,
  });

  const y = useTransform(scroll.scrollY, (currentValue) => {
    if (currentValue >= 76) {
      return currentValue - 76;
    }
    return 0;
  });

  let activeTags: string[] = Array.isArray(t)
    ? t
    : t !== null
      ? [t]
      : ([] as string[]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      className={
        "h-full min-h-screen border-r w-[300px] absolute left-0 top-0 pt-[76px]"
      }
      ref={ref}
      animate={open ? "open" : "closed"}
      initial={false}
      variants={{
        open: {
          x: 0,
          opacity: 1,
        },
        closed: {
          x: -300,
          opacity: 0,
        },
      }}
    >
      <NavbarButtonPortal>
        <button
          onClick={toggleOpen}
          className={clsx(navbarButtonClasses, open && "!text-foreground")}
        >
          Sidebar
        </button>
      </NavbarButtonPortal>
      <motion.div
        className={"relative"}
        style={{
          y: y,
        }}
        transition={{
          duration: 0,
        }}
      >
        <button className={"top-4 right-4 absolute"} onClick={toggleOpen}>
          <XIcon
            className={
              "text-muted-foreground hover:text-foreground transition-colors duration-300 w-3 h-3"
            }
          />
        </button>
        <TagList activeTags={activeTags} />
      </motion.div>
    </motion.div>
  );
};

BlogTagSideBar.displayName = "BlogTagSideBar";

export default BlogTagSideBar;
