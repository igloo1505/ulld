"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";
import { AnimatedLogoAsText } from "#/components/general/animatedLogoAsText";
import { orderedSections } from "#/types/landingSection";
import StoryOfULLD from "./storyOfUlld.mdx"
import useMeasure from "react-use-measure";

interface StoryOfUlldSectionProps {
    sectionIndex: number
}

const ltr = true;

const heading = "The story of ";

export const StoryOfUlldSection = ({sectionIndex}: StoryOfUlldSectionProps) => {
    const shouldShow = useMemo(() => orderedSections.indexOf("story") === sectionIndex, [sectionIndex])
    const vp = useViewport();
    const [ref, res] = useMeasure()
    if(!shouldShow) {
        return null
    }
    return (
        <div
            className={clsx(
                "absolute group/feature w-screen top-[76px] left-0 min-h-[calc(100vh-76px)] flex flex-col justify-start items-center gap-6 z-10",
                vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
            )}
        >
            <motion.h2
                className={"feature-animate opacity-0 text-foreground text-4xl font-bold absolute"}
                initial={{
                        x: `calc(50% - ${res.width / 2}px)`,
                        y: "16px",
                        opacity: 0,
                }}
                animate={{
                        x: `calc(50% - ${res.width / 2}px)`,
                        y: "calc(50% - 30px)",
                        opacity: 1,
                        transition: {
                            duration: 1,
                            top: {
                                delay: 2.5,
                                type: "spring"
                            },
                        },
                }}
                ref={ref}
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
                <AnimatedLogoAsText
                    show={shouldShow}
                    delay={1.4}
                    fontSize={36}
                />
            </motion.h2>
            <motion.div
                className={"mt-20 max-w-[min(83vw,1440px)]"}
                initial={{
                        opacity: 0,
                        x: 300,
                }}
                animate={{
                       opacity: 1,
                        x: 0,
                        transition: {
                            delay: 1.5
                        }
                }}
            > 
                <StoryOfULLD />
            </motion.div>
        </div>
    );
};

StoryOfUlldSection.displayName = "StoryOfUlldSection";
