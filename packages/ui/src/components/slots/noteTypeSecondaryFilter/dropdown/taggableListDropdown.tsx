"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TaggableListDropdownProps } from "./types";
import { ChevronDownIcon } from "lucide-react";
import cn from "@ulld/utilities/cn";
import RemoveTaggableBadge from "../../../navigationUtilityComponents/badges/removeTaggableBadge";
import TaggableBadge from "../../../navigationUtilityComponents/badges/taggableBadge";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { useInitialRender } from "@ulld/hooks/useInitialRender";

interface EventProps {
  open: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    "set-all-taggable-lists-state": CustomEvent<EventProps>;
  }
}

const toggleAllOpen = (type: string) => {
  let em = document.getElementById("taggableListGroup");
  if (!em) {
    return;
  }
  let allOpen = ["data-tagsopen", "data-topicsopen", "data-subjectsopen"]
    .filter((x) => x !== `data-${type}sopen`)
    .every((s) => em.getAttribute(s) === "true");

  window.dispatchEvent(
    new CustomEvent("set-all-taggable-lists-state", {
      detail: {
        open: !allOpen,
      },
    }),
  );
};

const TaggableListDropdown = (props: TaggableListDropdownProps) => {
  const [open, setOpen] = useState(false);

  const isInitial = useInitialRender();

  useEffect(() => {
    if (isInitial) {
      return;
    }
    let em = document.getElementById("taggableListGroup");
    if (!em) {
      return;
    }
    em.setAttribute(`data-${props.type}sopen`, open ? "true" : "false");
  }, [open]);

  useEventListener("set-all-taggable-lists-state", (e) => {
    setOpen(e.detail.open);
  });

  return (
    <div className={"w-full max-w-full h-fit mb-4"}>
      <div
        role="button"
        className={"w-full mb-2 relative pr-8 select-none"}
        onClick={() => setOpen(!open)}
        onDoubleClick={() => toggleAllOpen(props.type)}
      >
        <h3 className={"text-lg font-semibold"}>{props.label}</h3>
        <ChevronDownIcon
          className={cn(
            "absolute top-1 right-4 text-foreground transition-transform duration-300 cursor-pointer",
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
