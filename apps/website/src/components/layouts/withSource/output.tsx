"use client";
import { HTMLMotionProps, MotionValue, motion } from "framer-motion";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";

interface CodeOutputProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
}

const CodeOutput = forwardRef(
    (
        { children, ...props }: CodeOutputProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        return (
            <motion.div
                className={"w-full h-full max-h-full overflow-y-auto"}
                {...props}
                ref={ref}
            >
                {children}
            </motion.div>
        );
    },
);

CodeOutput.displayName = "CodeOutput";

export default CodeOutput;
