"use client";
import React, { useState } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import staticContent from "../../../../staticData/staticContent.json";
import { motion } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";

interface DescriptionLogoTitleBoxProps {
    section?: string;
    sectionIndex: number;
    ready: boolean;
    setReady: (isReady: boolean) => void;
    forceFalse: boolean
}

const translateDuration = 0.8;
const logoDelay = 1000;
const delay = 0;
const delay2 = 3;

export const DescriptionLogoTitleBox = ({
    section,
    sectionIndex: idx,
    ready,
    setReady,
    forceFalse
}: DescriptionLogoTitleBoxProps) => {
    const viewport = useViewport();
    const [internalReady, setInternalReady] = useState(ready);

    /* useEffect(() => { */
    /*     if(!ready){ */
    /*         setInternalReady(false) */
    /*     }  */
    /* }, [ready]) */

    const initial = forceFalse ? "hide" : Boolean(ready && internalReady)
        ? "after"
        : idx === 0 || section === "hero"
            ? "hide"
            : idx === 1
                ? "initial"
                : "after";
    const animate = forceFalse ? "hide" : Boolean(ready && internalReady)
        ? "after"
        : (idx === 0 || section === "hero")
            ? "hide"
            : "after";

    if (!viewport) return null;

    const handleAnimationStart = () => {
        if (animate === "after") {
            setTimeout(() => setReady(true), delay * 1000);
        }
    };

    return (
        <>
            <motion.div
                className={"w-16 h-[53px] absolute top-0 left-0"}
                initial={initial}
                animate={animate}
                variants={{
                    hide: {
                        opacity: 1,
                        translateX: `${viewport?.window?.width! / 2 - 32}px`,
                        translateY: `${viewport?.window.height! / 2 - 53}px`,
                        /* transition: { */
                        /*     duration: 0, */
                        /* }, */
                    },
                    initial: {
                        translateX: `${viewport?.window?.width! / 2 - 32}px`,
                        translateY: `${viewport?.window.height! / 2 - 53}px`,
                        opacity: 1,
                        transition: {
                            /* delay: 2, */
                            translateY: {
                                duration: 0,
                                bounce: 0,
                            },
                            translateX: {
                                duration: 0,
                                bounce: 0,
                            },
                        },
                    },
                    after: {
                        opacity: 1,
                        translateX: "16px",
                        translateY: "16px",
                        transition: {
                            /* duration: duration, */
                            type: "spring",
                            bounce: 0,
                            /* delay: delay, */
                            translateX: {
                                duration: translateDuration,
                                delay: delay2,
                            },
                            translateY: {
                                duration: translateDuration,
                                delay: delay2,
                            },
                        },
                    },
                }}
                onAnimationStart={handleAnimationStart}
            >
                <AnimatedUlldLogo
                    width={64}
                    height={64}
                    show={animate === "after"}
                    delay={logoDelay}
                    speed={2}
                    onAnimationComplete={() => setInternalReady(true)}
                />
            </motion.div>
            <motion.h2
                initial={initial}
                animate={animate}
                className={"text-sm w-[350px] absolute top-0 left-0"}
                variants={{
                    hide: {
                        translateX: `${viewport.window.width / 2 - 175}px`,
                        translateY: `${viewport.window.height / 2}px`,
                        opacity: 0,
                        /* transition: { */
                        /*     duration: 0 */
                        /* } */
                    },
                    initial: {
                        translateX: `${viewport.window.width / 2 - 175}px`,
                        translateY: `${viewport.window.height / 2}px`,
                        opacity: 1,
                        transition: {
                            translateY: {
                                duration: 0,
                                bounce: 0,
                            },
                            translateX: {
                                duration: 0,
                                bounce: 0,
                            },
                        },
                    },
                    after: {
                        opacity: 1,
                        translateX: "88px",
                        translateY: "24px",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            opacity: {
                                delay: 0.5,
                            },
                            translateX: {
                                duration: translateDuration,
                                delay: delay2,
                            },
                            translateY: {
                                duration: translateDuration,
                                delay: delay2,
                            },
                        },
                    },
                }}
            >
                {staticContent.subtitleBroken[0]}
            </motion.h2>
            <motion.h2
                initial={initial}
                animate={animate}
                className={"text-sm w-[230px] absolute top-0 left-0"}
                variants={{
                    hide: {
                        translateX: `${viewport.window.width / 2 - 115}px`,
                        translateY: `${viewport.window.height / 2 + 20}px`,
                        opacity: 0,
                        /* transition: { */
                        /*     duration: 0 */
                        /* } */
                    },
                    initial: {
                        opacity: 1,
                        translateX: `${viewport.window.width / 2 - 115}px`,
                        translateY: `${viewport.window.height / 2 + 20}px`,
                        transition: {
                            translateY: {
                                duration: 0,
                                bounce: 0,
                            },
                            translateX: {
                                duration: 0,
                                bounce: 0,
                            },
                        },
                    },
                    after: {
                        translateX: "88px",
                        translateY: "40px",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0,
                            opacity: {
                                delay: 0.5,
                            },
                            translateX: {
                                duration: translateDuration,
                                delay: delay2,
                            },
                            translateY: {
                                duration: translateDuration,
                                delay: delay2,
                            },
                        },
                    },
                }}
            >
                {staticContent.subtitleBroken[1]}
            </motion.h2>
        </>
    );
};

DescriptionLogoTitleBox.displayName = "DescriptionLogoTitleBox";
