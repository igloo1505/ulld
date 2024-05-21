"use client";
import { motion } from "framer-motion";
import React from "react";
import staticContent from "#/staticData/staticContent.json";
import { usePathname } from "next/navigation";

interface AnimatedBrokenSubtitleProps {
    delay: number;
}

const defaultDelay = 1.5;

const Broken = ({
    delay,
    pathName,
}: AnimatedBrokenSubtitleProps & { pathName: string }) => {
    return (
        <div
            className={
                "w-fit min-w-fit flex-col justify-center items-start flex-grow hidden md:flex"
            }
        >
            <motion.h3
                className={"text-sm whitespace-nowrap"}
                initial={{
                    x: 100,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: pathName === "/" ? delay : defaultDelay,
                }}
            >
                {staticContent.subtitleBroken[0]}
            </motion.h3>
            <motion.h3
                className={"text-sm whitespace-nowrap"}
                initial={{
                    x: 100,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: pathName === "/" ? delay + 0.25 : defaultDelay + 0.25,
                }}
            >
                {staticContent.subtitleBroken[1]}
            </motion.h3>
        </div>
    );
};

const Solid = ({
    delay,
    pathName,
}: AnimatedBrokenSubtitleProps & { pathName: string }) => {
    return (
        <div className={"w-[calc(100vw-8rem)] hidden xxs:inline-block md:hidden"}>
            <motion.h3
                className={"text-sm"}
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: pathName === "/" ? delay : defaultDelay,
                }}
            >
                {staticContent.subtitle}
            </motion.h3>
        </div>
    );
};

const AnimatedBrokenSubtitle = (props: AnimatedBrokenSubtitleProps) => {
    const pathName = usePathname();
    return (
        <>
            <Broken {...props} pathName={pathName} />
            <Solid {...props} pathName={pathName} />
        </>
    );
};

AnimatedBrokenSubtitle.displayName = "AnimatedBrokenSubtitle";

export default AnimatedBrokenSubtitle;
