"use client"
import { motion } from "framer-motion";
import React from "react";
import staticContent from "#/staticData/staticContent.json";

interface AnimatedBrokenSubtitleProps {
    delay: number
}

const AnimatedBrokenSubtitle = ({delay}: AnimatedBrokenSubtitleProps) => {
    return (
        <div
            className={"w-fit min-w-fit flex flex-col justify-center items-start flex-grow"}
        >
            <motion.h3
                className={"text-sm whitespace-nowrap"}
                initial={{
                    x: 100,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    delay: delay
                }}
            >{staticContent.subtitleBroken[0]}</motion.h3>
            <motion.h3 
                className={"text-sm whitespace-nowrap"}
                initial={{
                    x: 100,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    delay: delay + 0.25
                }}
            >{staticContent.subtitleBroken[1]}</motion.h3>
        </div>
    );
};

AnimatedBrokenSubtitle.displayName = "AnimatedBrokenSubtitle";

export default AnimatedBrokenSubtitle;
