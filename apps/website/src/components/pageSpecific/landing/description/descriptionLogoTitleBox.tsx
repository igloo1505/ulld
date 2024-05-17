"use client";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import staticContent from "../../../../staticData/staticContent.json";
import { motion, useInView } from "framer-motion";
import { useViewport } from "@ulld/hooks/useViewport";
import DescriptionLogoLine from "./descriptionLogoLine";

interface DescriptionLogoTitleBoxProps { }

const translateDuration = 0.8;
const logoDelay = 1000;
const delay2 = 3;

export type CompleteAnimRef = HTMLHeadingElement;

export const DescriptionLogoTitleBox = ({ }: DescriptionLogoTitleBoxProps) => {
    const [styles, setStyles] = useState<{
        width: number | null;
        styles: CSSProperties;
    }>({ width: null, styles: {} });
    const ref = useRef<HTMLDivElement>(null!);
    const line1 = useRef<HTMLHeadingElement>(null!);
    const line2 = useRef<HTMLHeadingElement>(null!);
    const show = useInView(ref);
    const vp = useViewport();

    useEffect(() => {
        if (!vp) return;
        const width = Math.min(64, vp.window.width * 0.15);
        setStyles({
            width: width,
            styles: {
                width: `${width}px`,
                height: `${width * 0.828125}px`,
            },
        });
    }, [vp]);

    return (
        <motion.div
            className={"absolute"}
            initial={{
                top: "50vh",
                left: "50vw",
                x: "-50%",
                y: "-50%", 
            }}
            animate={{
                top: 16,
                left: 16
            }}
        >
            <motion.div
                ref={ref}
                className={"w-16 h-[53px] top-0 left-0"}
                /* style={styles.styles} */
                initial={{
                    opacity: 1,
                    scale: 1,
                    /* x: `calc(50vw - 32px)`, */
                    /* y: `calc(50vh - 53px)`, */
                }}
                exit={{
                    opacity: 0,
                    scale: 0,
                    /* x: "16px", */
                    /* y: "16px", */
                }}
                animate={{
                    opacity: 1,
                    /* x: "16px", */
                    /* y: "16px", */
                    transitionEnd: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    transition: {
                        type: "spring",
                        bounce: 0,
                        x: {
                            duration: translateDuration,
                            delay: delay2,
                        },
                        y: {
                            duration: translateDuration,
                            delay: delay2,
                        },
                    },
                }}
            >
                <AnimatedUlldLogo
                    width={styles.width as number}
                    show={show}
                    delay={logoDelay}
                    speed={2}
                />
            </motion.div>
            <motion.div
                className={"flex flex-col justify-center items-center"}
                initial={{
                    x: "calc(50vw - 115px)",
                    y: `calc(50vh + 20px)`,
                    justifyContent: "center",
                    opacity: 0,
                }}
                animate={{
                    x: `${vp ? Math.min(88, vp.window.width * 0.15) : 88}px`,
                    y: "40px",
                    opacity: 1,
                    justifyContent: "center",
                    transitionEnd: {
                        position: "relative",
                    },
                    transition: {
                        type: "spring",
                        bounce: 0,
                        opacity: {
                            delay: 0.5,
                        },
                        /* x: { */
                        /*     duration: styles.width ? 0 : duration, */
                        /*     delay: styles.width ? 0 : delay2, */
                        /* }, */
                        /* y: { */
                        /*     duration: translateDuration, */
                        /*     delay: delay2, */
                        /* }, */
                    },
                }}
                exit={{
                    opacity: 0,
                    scale: 0,
                    x: "-50vw",
                    y: "40px",
                }}
            >
                <DescriptionLogoLine content={staticContent.subtitleBroken[0]} />
                <DescriptionLogoLine content={staticContent.subtitleBroken[1]} />
            </motion.div>
        </motion.div>
    );
};

DescriptionLogoTitleBox.displayName = "DescriptionLogoTitleBox";
