import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface AnimatedLogoAsTextProps {
    fontSize?: number;
    className?: string;
    delay?: number;
    show: boolean;
    stagger?: number
}

export const AnimatedLogoAsText = ({
    fontSize = 16,
    className,
    show,
    stagger = 0.15,
    delay = 0,
}: AnimatedLogoAsTextProps) => {
    return (
        <motion.span
            className={clsx(
                "inline-block w-fit leading-none font-semibold",
                className,
            )}
        >
            <motion.span
                className={"text-brand inline-block"}
                style={{
                    transform: `translateY(${fontSize * 0.25}px)`,
                    fontSize: `${fontSize * 1.5}px`,
                }}
                initial="hide"
                animate={show ? "show" : "hide"}
                variants={{
                    hide: {
                        opacity: 0,
                        scale: 0,
                    },
                    show: {
                        opacity: 1,
                        scale: 1,
                        y: fontSize * 0.25,
                        transition: {
                            delay: delay,
                        },
                    },
                }}
            >
                U
            </motion.span>
            <motion.span
                className={"inline-block text-foreground"}
                style={{
                    fontSize: `${fontSize}px`,
                }}
                initial="hide"
                animate={show ? "show" : "hide"}
                variants={{
                    hide: {
                        opacity: 0,
                        scale: 0,
                    },
                    show: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: delay + stagger,
                        },
                    },
                }}
            >
                L
            </motion.span>
            <motion.span
                className={"inline-block text-foreground"}
                style={{
                    fontSize: `${fontSize}px`,
                }}
                initial="hide"
                animate={show ? "show" : "hide"}
                variants={{
                    hide: {
                        opacity: 0,
                        scale: 0,
                    },
                    show: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: delay + stagger * 2,
                        },
                    },
                }}
            >
                L
            </motion.span>
            <motion.span
                className={"inline-block text-foreground"}
                style={{
                    fontSize: `${fontSize}px`,
                }}
                initial="hide"
                animate={show ? "show" : "hide"}
                variants={{
                    hide: {
                        opacity: 0,
                        scale: 0,
                    },
                    show: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: delay + stagger * 3
                        },
                    },
                }}
            >
                D
            </motion.span>
        </motion.span>
    );
};

AnimatedLogoAsText.displayName = "AnimatedLogoAsText";
