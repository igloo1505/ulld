import React, { ComponentProps } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import clsx from 'clsx'

const Link = motion(NextLink);

interface HeroButtonProps extends ComponentProps<typeof Link> {
    delay?: number;
    top?: boolean
    bottom?: boolean
}

const HeroButton = ({ delay, top, bottom, className, ...props }: HeroButtonProps) => {
    return <Link
        {...props} 
        className={clsx("text-2xl z-10 py-2 px-4 md:py-3 md:px-5 rounded-lg bg-primary hover:bg-blue-600 transition-colors duration-300 flex justify-center items-center", className)}
        initial={{
            scale: 0,
            opacity: 0,
            ...(top && {
                y: -100
            }),
            ...(bottom && {
                y: 100
            }),
        }}
        animate={{
            scale: 1,
            opacity: 1,
            y: 0
        }}
        transition={{
            delay
        }}
    />;
};

HeroButton.displayName = "HeroButton";

export default HeroButton;
