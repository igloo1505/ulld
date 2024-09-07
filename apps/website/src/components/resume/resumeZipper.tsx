"use client"
import React from "react";
import { motion } from "framer-motion";

const maxButtons = 100

const ResumeColumnZipper = () => {
    return (
        <div
            className={
                "w-full min-h-full h-fit flex flex-col justify-around items-center gap-1"
            }
        >
            {Array(maxButtons)
                .fill(0)
                .map((_, i) => {
                    return (
                        <motion.div
                            key={`center-dot-${i}`}
                            className={"w-1 h-1 bg-muted rounded-full"}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1,
                                /* backgroundColor: "hsl(var(--primary))", */
                            }}
                        />
                    );
                })}
        </div>
    );
};

ResumeColumnZipper.displayName = "ResumeColumnZipper";

export default ResumeColumnZipper;
