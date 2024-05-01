"use client";
import React, { useEffect, useRef, useState } from "react";
import { FeatureContainerProps, FeatureUIStage } from "./types";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useShouldShowFeature } from "./useInitialFeatureDelay";
import { LandingSection } from "#/types/landingSection";

interface FeatureContainerTextProps
    extends Pick<
        FeatureContainerProps,
        "label" | "desc" | "title" | "orientation"
    > {
    stage: FeatureUIStage;
    idx: number;
    section: LandingSection | string;
}

const FeatureContainerText = ({
    label,
    title,
    desc,
    orientation,
    stage: _stage,
    idx,
    section,
}: FeatureContainerTextProps) => {
    const scope = useRef<HTMLDivElement>(null!);
    const ltr = orientation === "ltr";
    const [animFinished, setAnimFinished] = useState(false);
    const stage = useShouldShowFeature(
        scope,
        _stage,
        idx,
        section === "hero",
        section,
    );
    const Desc = desc;
    const Title = title;
    const Label = label;
    useEffect(() => {
        if (stage !== "current") {
            setAnimFinished(false);
        }
    }, [stage]);

    return (
        <motion.div
            ref={scope}
            className={"w-full min-w-[min(400px,calc(100vw-4rem))] flex flex-col justify-center items-start group-[.feature-active]/feature:z-10"}
        >
            <motion.h3
                className={clsx(
                    "feature-animate opacity-0 text-muted-foreground text-2xl font-semibold mt-2",
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
                        },
                    },
                    past: {
                        x: ltr ? -100 : 100,
                        opacity: 0,
                        transition: {
                            duration: 0.5,
                        },
                    },
                }}
            >
                {typeof Label === "function" ? (
                    <Label
                        section={section}
                        orientation={orientation}
                        shouldShow={stage === "current"}
                        animFinished={animFinished}
                    />
                ) : (
                    Label
                )}
            </motion.h3>
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
                            delay: 0.25,
                        },
                    },
                    past: {
                        x: ltr ? -100 : 100,
                        opacity: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.25,
                        },
                    },
                }}
            >
                {typeof Title === "function" ? (
                    <Title
                        section={section}
                        orientation={orientation}
                        shouldShow={stage === "current"}
                        animFinished={animFinished}
                    />
                ) : (
                    Title
                )}
            </motion.h2>
            <motion.p
                className={clsx(
                    "feature-animate opacity-0 origin-center text-foreground text-lg mt-4",
                )}
                initial="hidden"
                animate={stage}
                variants={{
                    hidden: {
                        opacity: 0,
                        scale: 0,
                    },
                    current: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: 0.65,
                            duration: 0.5,
                            scale: {
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                            },
                        },
                    },
                    past: {
                        opacity: 0,
                        scale: 0,
                        transition: {
                            delay: 0.65,
                            duration: 0.5,
                            scale: {
                                duration: 1,
                                type: "spring",
                                stiffness: 100,
                            },
                        },
                    },
                }}
                onAnimationComplete={() => setAnimFinished(true)}
            >
                <Desc
                    section={section}
                    orientation={orientation}
                    shouldShow={stage === "current"}
                    animFinished={animFinished}
                />
            </motion.p>
        </motion.div>
    );
};

FeatureContainerText.displayName = "FeatureContainerText";

export default FeatureContainerText;
