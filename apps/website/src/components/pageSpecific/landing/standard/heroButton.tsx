import React, { ComponentProps } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const Link = motion(NextLink);

interface HeroButtonProps extends ComponentProps<typeof Link> {
    delay?: number;
    top?: boolean
    bottom?: boolean
}

const HeroButton = ({ delay, top, bottom, ...props }: HeroButtonProps) => {
    return <Link
        {...props} 
        className={"text-2xl py-3 px-5 rounded-lg bg-primary hover:bg-primary/80 transition-colors duration-300"}
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
