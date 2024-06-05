"use client";
import { motion } from "framer-motion";
import React, { HTMLProps } from "react";
import staticContent from "#/staticData/staticContent.json";
import { usePathname } from "next/navigation";
import clsx from 'clsx'

interface AnimatedBrokenSubtitleProps extends HTMLProps<HTMLDivElement> {
    delay: number;
}

const defaultDelay = 1.5;

const Broken = ({
    delay,
    pathName,
    ...props
}: AnimatedBrokenSubtitleProps & { pathName: string }) => {
    return (
        <div
            {...props}
            className={
                clsx("w-fit min-w-fit flex-col justify-center items-start flex-grow hidden navbarPartial:flex", props.className)
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
    ...props
}: AnimatedBrokenSubtitleProps & { pathName: string }) => {
    return (
        <div
            {...props}
            className={clsx("w-[calc(100vw-8rem)] hidden xxs:inline-block md:hidden", props.className)}
        >
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
            {/* <Solid {...props} pathName={pathName} /> */}
        </>
    );
};

AnimatedBrokenSubtitle.displayName = "AnimatedBrokenSubtitle";

export default AnimatedBrokenSubtitle;
