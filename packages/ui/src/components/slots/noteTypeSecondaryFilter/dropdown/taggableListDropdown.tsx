"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TaggableDropdownINTERNAL } from "./internal";
import { TaggableListDropdownProps } from "./types";
import { ChevronDownIcon } from "lucide-react";
import cn from "@ulld/utilities/cn";


const TaggableListDropdown = (props: TaggableListDropdownProps) => {
    const [open, setOpen] = useState(false)
    return (
        <motion.div
                animate={open ? "open" : "closed"}
                variants={{
                    open: {
                        height: "auto",
                    },
                    closed: {
                        height: 0,
                    },
                }}
            className={cn("pr-8 overflow-hidden will-change-auto relative origin-top", !open && "[&_.tl-internal]:!my-0")}
        >
            <TaggableDropdownINTERNAL {...props} />
            <ChevronDownIcon 
                role="button"
                onClick={() => setOpen(!open)}
                className={cn("absolute top-4 right-4", open ? "rotate-0" : "rotate-180")}
            />
        </motion.div>
    );
};

TaggableListDropdown.displayName = "TaggableListDropdown";

export default TaggableListDropdown;
