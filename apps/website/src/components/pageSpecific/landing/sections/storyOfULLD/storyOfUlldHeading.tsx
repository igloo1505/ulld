"use client"
import { AnimatedLogoAsText } from "#/components/general/animatedLogoAsText";
import { motion } from "framer-motion";
import React from "react";

interface StoryOfUlldHeadingProps { }

const heading = "The story of ";

const StoryOfUlldHeading = (props: StoryOfUlldHeadingProps) => {
    return (
        <motion.h2
            className={
                "feature-animate opacity-0 text-foreground text-4xl font-bold absolute"
            }
            initial={{
                y: "-100px",
                opacity: 0,
            }}
            animate={{
                y: "0px",
                opacity: 1,
                transition: {
                    duration: 1,
                    top: {
                        delay: 2.5,
                        type: "spring",
                    },
                },
            }}
        >
            {heading.split("").map((l, i) => {
                return (
                    <motion.span
                        key={i}
                        initial={{
                            y: -30,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.25 + i * 0.1,
                            },
                        }}
                    >
                        {l}
                    </motion.span>
                );
            })}
            <AnimatedLogoAsText show={true} delay={1.4} fontSize={36} />
        </motion.h2>
    );
};

StoryOfUlldHeading.displayName = "StoryOfUlldHeading";

export default StoryOfUlldHeading;
