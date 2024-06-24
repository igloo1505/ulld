"use client";
import React from "react";
import clsx from "clsx";
import { MotionProps, motion } from "framer-motion";
import HeroButton from "./heroButton";
import staticContent from "staticContent";
import { HeroBackground } from "../hero/background";

interface HeroSectionProps { }

const title = "Uh Little Less Dum";

const variants: MotionProps["variants"] = {
    show: {
        scale: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 3,
        },
    },
    hide: {
        scale: 0,
    },
};

const HeroSection = (props: HeroSectionProps) => {
    return (
        <HeroBackground containerClassName="min-h-screen w-full">
            <div
                className={
                    "min-h-[calc(100vh-76px)] w-full flex flex-col justify-center items-center"
                }
            >
                <motion.h1
                    className={
                        "text-[7vw] sm:text-5xl md:text-6xl font-bold text-center align-middle flex flex-row justify-center items-center leading-none"
                    }
                    variants={variants}
                    animate={"show"}
                    initial={"hide"}
                >
                    {title.split("").map((t, i) => {
                        return t === " " ? (
                            <motion.span key={`hero-${i}`} className={"w-[0.33ch] leading-none"}> </motion.span>
                        ) : (
                            <motion.span
                                key={`hero-${i}`}
                                className={clsx(
                                    i === 0 && "text-primary text-[14vw] sm:text-7xl md:text-8xl",
                                )}
                                variants={{
                                    hide: { scale: 0 },
                                    show: { scale: 1 },
                                }}
                            >
                                {t}
                            </motion.span>
                        );
                    })}
                </motion.h1>
                <motion.div
                    className={"sm:text-lg text-center font-semibold"}
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 4.5,
                    }}
                >
                    Note taking for the modern academic
                </motion.div>

                <div
                    className={
                        "mt-6 flex flex-col justify-center items-center gap-4 md:gap-6"
                    }
                >
                    <div className={"w-full grid grid-cols-2 gap-4 md:gap-6"}>
                        <HeroButton
                            href={staticContent.links.docs.internal.home}
                            delay={5.5}
                            top
                        >
                            Docs
                        </HeroButton>
                        <HeroButton
                            href={staticContent.links.demos.myNotes}
                            delay={5.5}
                            bottom
                        >
                            Demo
                        </HeroButton>
                    </div>
                    <HeroButton
                        href={staticContent.links.docs.getStarted}
                        delay={5.75}
                        className={"w-full"}
                    >
                        Get Started
                    </HeroButton>
                </div>
            </div>
        </HeroBackground>
    );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
