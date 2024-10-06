"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TaggableListDropdownProps } from "./types";
import { ChevronDownIcon } from "lucide-react";
import cn from "@ulld/utilities/cn";
import RemoveTaggableBadge from "../../../navigationUtilityComponents/badges/removeTaggableBadge";
import TaggableBadge from "../../../navigationUtilityComponents/badges/taggableBadge";

const TaggableListDropdown = (props: TaggableListDropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={"w-full max-w-full h-fit mb-4"}>
      <div className={"w-full mb-2 relative pr-8"}>
        <h3 className={"text-lg font-semibold"}>{props.label}</h3>
        <ChevronDownIcon
          role="button"
          onClick={() => setOpen(!open)}
          className={cn(
            "absolute top-1 right-4 text-foreground transition-transform duration-300",
            open ? "rotate-0" : "rotate-180",
          )}
        />
      </div>
      <motion.div
        className={cn(
          "w-full h-fit flex flex-row justify-start items-center flex-wrap gap-4 tl-internal overflow-hidden will-change-auto relative origin-top",
          !open && "[&_.tl-internal]:!my-0",
        )}
        initial={open ? "open" : "closed"}
        animate={open ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
          },
          closed: {
            height: 0,
          },
        }}
      >
        {props.activeItems.map((s) => {
          return (
            <RemoveTaggableBadge {...s} key={`${props.type}-${s.value}`} />
          );
        })}
        {props.inactiveItems.map((s) => {
          return <TaggableBadge {...s} key={`${props.type}-${s.value}`} />;
        })}
      </motion.div>
    </div>
  );
};

TaggableListDropdown.displayName = "TaggableListDropdown";

export default TaggableListDropdown;
