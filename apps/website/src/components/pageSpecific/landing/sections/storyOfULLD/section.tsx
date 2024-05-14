"use client";
import React, {useMemo, useState} from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";
import { AnimatedLogoAsText } from "#/components/general/animatedLogoAsText";
import {useUtf8File} from "@ulld/hooks/useUtf8File"
import { MdxContentCLIENT } from "@ulld/render/mdx/client";
import { orderedSections } from "#/types/landingSection";

interface StoryOfUlldSectionProps {
    sectionIndex: number
}

const ltr = true;

const heading = "The story of ";

export const StoryOfUlldSection = ({sectionIndex}: StoryOfUlldSectionProps) => {
    const shouldShow = useMemo(() => orderedSections.indexOf("story") === sectionIndex, [sectionIndex])
    const vp = useViewport();
    const content = useUtf8File("src/components/pageSpecific/landing/sections/storyOfULLD/storyOfUlld.mdx", true)
    if(!shouldShow) {
        return null
    }
    const [contentReady, setContentReady] = useState(false)
    return (
        <div
            className={clsx(
                "absolute group/feature w-screen top-[76px] left-0 min-h-[calc(100vh-76px)] flex flex-col justify-start items-center gap-6",
                shouldShow && "feature-active z-[10]",
                vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
            )}
        >
            <motion.h2
                className={clsx(
                    "feature-animate opacity-0 text-foreground text-4xl font-bold absolute",
                    ltr ? "translate-x-[-100px]" : "translate-x-[100px]",
                )}
                initial={{
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                        opacity: 0,
                }}
                animate={{
                        top: "16px",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                        opacity: 1,
                        transition: {
                            duration: 1,
                            top: {
                                delay: 2.5,
                                type: "spring"
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
                <AnimatedLogoAsText
                    show={shouldShow}
                    delay={1.4}
                    fontSize={36}
                />
            </motion.h2>
            {(content && shouldShow && contentReady) && (
            <motion.div
                className={"mt-20"}
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
            <MdxContentCLIENT content={content as string} bareAss onReady={() => setContentReady(true)} />
            </motion.div>
            )}
        </div>
    );
};

StoryOfUlldSection.displayName = "StoryOfUlldSection";
