"use client";
import React, { useState } from "react";
import TagList from "./tagList";
import { useSearchParams } from "next/navigation";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";

interface BlogTagSideBarProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
}

/* PRIORITY: Move this scroll listener to framer-motion when back online and capable of looking up docs. This is handled inside the react render function, so framer-motion will likely be much more performant. */

const BlogTagSideBar = ({ open, setOpen }: BlogTagSideBarProps) => {
    const sp = useSearchParams();
    let t = sp.getAll("tags");

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
                "h-full max-h-full min-h-screen-noNav overflow-y-auto border-r relative"
            }
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
            <motion.button
                className={"top-4 right-4 absolute opacity-100"}
                onClick={toggleOpen}
                animate={open ? "open" : "closed"}
                initial={false}
                variants={{
                    open: {
                        x: 0,
                    },
                    closed: {
                        x: 64,
                    },
                }}
            >
                <XIcon
                    className={
                        "text-muted-foreground hover:text-foreground transition-colors duration-300 w-3 h-3"
                    }
                />
            </motion.button>
            <TagList activeTags={activeTags} />
        </motion.div>
    );
};

BlogTagSideBar.displayName = "BlogTagSideBar";

export default BlogTagSideBar;
