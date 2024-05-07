"use client";
import React, { useState, useEffect } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import staticContent from "../../../../staticData/staticContent.json";
import { motion } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";
import { useSectionIndex } from "../feature/useSectionIndex";

interface DescriptionLogoTitleBoxProps {
}

const duration = 2;

export const DescriptionLogoTitleBox = ({
}: DescriptionLogoTitleBoxProps) => {
    const { idx, section } = useSectionIndex();
    const isDescription = Boolean(idx && idx > 0);
    const shouldAnimate = section === "description";
    const [shouldShow, setShouldShow] = useState(
        !idx ? false : Boolean(isDescription && !shouldAnimate) ? true : false,
    );
    const viewport = useViewport();

    useEffect(() => {
        if (isDescription) {
            setTimeout(() => {
                setShouldShow(true);
            }, 3000);
        } else {
            setShouldShow(false);
        }
    }, [isDescription]);
    if (!viewport) return null;

    return (
        <>
            <motion.div
                className={"w-16 h-[53px] absolute top-0 left-0"}
                initial={!isDescription ? "hide" : shouldAnimate ? "initial" : "after"}
                animate={!isDescription ? "hide" : shouldShow ? "after" : "initial"}
                variants={{
                    hide: {
                        opacity: 0,
                        transition: {
                            duration: 0
                        }
                    },
                    initial: {
                        translateX: `${viewport?.window?.width! / 2 - 32}px`,
                        translateY: `${viewport?.window.height! / 2 - 53}px`,
                        opacity: 1
                    },
                    after: {
                        opacity: 1,
                        translateX: "16px",
                        translateY: "16px",
                        transition: {
                            duration: duration,
                            type: "spring",
                            bounce: 0,
                        },
                    },
                }}
            >
                <AnimatedUlldLogo
                    width={64}
                    height={64}
                    show={isDescription}
                    delay={1000}
                    speed={2}
                />
            </motion.div>
            <motion.h2
                initial={!isDescription ? "hide" : shouldAnimate ? "initial" : "after"}
                animate={!isDescription ? "hide" : shouldShow ? "after" : "initial"}
                className={"text-sm w-[350px] absolute top-0 left-0"}
                variants={{
                    hide: {
                        opacity: 0
                    },
                    initial: {
                        translateX: `${viewport.window.width / 2 - 175}px`,
                        translateY: `${viewport.window.height / 2}px`,
                        opacity: 1,
                    },
                    after: {
                        opacity: 1,
                        translateX: "88px",
                        translateY: "24px",
                        transition: {
                            duration: duration,
                            type: "spring",
                            bounce: 0,
                        },
                    },
                }}
            >
                {staticContent.subtitleBroken[0]}
            </motion.h2>
            <motion.h2
                initial={!isDescription ? "hide" : shouldAnimate ? "initial" : "after"}
                animate={!isDescription ? "hide" : shouldShow ? "after" : "initial"}
                className={"text-sm w-[230px] absolute top-0 left-0"}
                variants={{
                    hide: {
                        opacity: 0
                    },
                    initial: {
                        opacity: 1,
                        translateX: `${viewport.window.width / 2 - 115}px`,
                        translateY: `${viewport.window.height / 2 + 20}px`,
                    },
                    after: {
                        translateX: "88px",
                        translateY: "40px",
                        opacity: 1,
                        transition: {
                            duration: duration,
                            type: "spring",
                            bounce: 0,
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
