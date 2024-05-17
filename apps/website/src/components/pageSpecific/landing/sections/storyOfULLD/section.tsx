"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";
import { AnimatedLogoAsText } from "#/components/general/animatedLogoAsText";
import { allStoryOfULLDs } from "contentlayer/generated";
import _MDXArticle from "#/components/layouts/mdxArticle";

const MDXArticle = motion(_MDXArticle);

const storyOfUlld = Array.isArray(allStoryOfULLDs)
    ? allStoryOfULLDs[0]
    : allStoryOfULLDs;

interface StoryOfUlldSectionProps { 
}

const heading = "The story of ";

export const StoryOfUlldSection = ({}: StoryOfUlldSectionProps) => {
    const vp = useViewport();
    /* RESUME: Come back here and move this to a single internal hook to populate all of the components as needed. */
    const ref = useRef<HTMLDivElement>(null!);
    const inView = useInView(ref, { margin: "-20%" });

    return (
        <div
            ref={ref}
            className={clsx(
                "group/feature relative w-screen top-[76px] left-0 min-h-[calc(100vh-76px)] h-fit flex flex-col justify-start items-center gap-6 z-10",
                vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
            )}
        >
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
            <MDXArticle
                id="storyOfULLD"
                className={"mt-20 max-w-[min(83vw,1440px)]"}
                animate={inView ? "show" : "hide"}
                variants={{
                    show: {
                        opacity: 1,
                    },
                    hide: {
                        opacity: 0,
                    },
                }}
                mdx={storyOfUlld}
            />
        </div>
    );
};

StoryOfUlldSection.displayName = "StoryOfUlldSection";
