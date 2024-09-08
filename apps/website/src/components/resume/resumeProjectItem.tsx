"use client";
import React from "react";
import { ResumeData } from "../../app/resume/resumeData";
import clsx from "clsx";
import { motion } from "framer-motion";
import { DynamicIcon } from "@ulld/icons";

interface ResumeProjectItemProps {
  dir: "right" | "left";
  item: ResumeData["projects"][number];
  index: number;
  initialDelay: number;
}

const ResumeProjectItem = ({
  dir,
  item,
  index,
  initialDelay,
}: ResumeProjectItemProps) => {
  const textClass = dir === "right" ? "text-right" : "text-left";

  const x = dir === "right" ? 100 : -100;

  return (
    <div
      className={clsx(
        "w-full flex flex-col justify-center",
        dir === "right" ? "items-end" : "items-start",
      )}
    >
      <motion.h3
        className={clsx("font-semibold text-lg", textClass)}
        initial={{
          x,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: initialDelay,
          },
        }}
      >
        {item.title}
      </motion.h3>
      <motion.p 
                className={clsx("", textClass)} 
                initial={{
                    x,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: initialDelay + 0.15
                    }
                }}
            >{item.desc}</motion.p>
      <motion.a
                className={clsx("text-link w-full grid grid-cols-[1fr_40px]")}
            >
                <div className={clsx("w-full", textClass)}>
                {item.repo}
                </div>
               <DynamicIcon name="github" className={"h-3 w-3"}/>
                </motion.a>
    </div>
  );
};

ResumeProjectItem.displayName = "ResumeProjectItem";

export default ResumeProjectItem;
