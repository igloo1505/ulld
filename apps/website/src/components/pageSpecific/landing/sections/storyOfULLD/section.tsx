"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useFeatureUIStage } from "../../feature/useFeatureUIStage";
import { useViewport } from "@ulld/hooks/useViewport";
import { AnimatedLogoAsText } from "#/components/general/animatedLogoAsText";

interface StoryOfUlldSectionProps { }

const ltr = true;

const heading = "The story of "

export const StoryOfUlldSection = (props: StoryOfUlldSectionProps) => {
    const { stage, section } = useFeatureUIStage("story", -1);
    const vp = useViewport();
    return (
        <div
            className={clsx(
                "absolute group/feature w-screen top-[76px] left-0 min-h-[calc(100vh-76px)] flex flex-col justify-center items-center gap-6",
                stage === "current" && "feature-active z-[10]",
                vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
            )}
        >
            <motion.h2
                className={clsx(
                    "feature-animate opacity-0 text-foreground text-4xl font-bold",
                    ltr ? "translate-x-[-100px]" : "translate-x-[100px]",
                )}
                initial="hidden"
                animate={stage}
                variants={{
                    hidden: {
                        x: ltr ? -100 : 100,
                        opacity: 0,
                    },
                    current: {
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.5,
                        },
                    },
                }}
            >
                {heading.split("").map((l, i) => {
                return <motion.span
                initial="hidden"
                animate={stage}
                variants={{
                    hidden: {
                        y: -30,
                        opacity: 0,
                    },
                    current: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            // duration: 0.5,
                            delay: 0.25 + i * 0.1
                        },
                    },
                }}
                >{l}</motion.span>
                })}<AnimatedLogoAsText
                show={stage === "current"}
                delay={1.4}
                fontSize={36}
                />
            </motion.h2>
        </div>
    );
};

StoryOfUlldSection.displayName = "StoryOfUlldSection";
