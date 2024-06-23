"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import { CheckIcon as CI } from "lucide-react";
import { LogoAsText } from "#/components/general/logoAsText";

const CheckIcon = motion(CI);

const ltr = true;

interface WhyShouldIUseULLDSectionProps {
    delay?: number;
}

interface ReasonToUseULLD {
    content: ReactNode;
}

const reasons: ReasonToUseULLD[] = [
    {
        content:
            "Markdown is simple enough for anybody to learn in 15 minutes, but too simple on it's own to accomodate the needs of more advanced user's. Extending markdown with the equally simple syntax of JSX extends takes the use cases for markdown to another dimension.",
    },
    {
        content: (
            <>
                <LogoAsText /> was redesigned from the ground up to support plugins
                built both internally and with time, by a community of developers.{" "}
                <LogoAsText /> uses the most modern technologies, familiar to more
                current developers than just about any other language or framework. If
                your use case isn't supported now, chances are that it will be soon.
            </>
        ),
    },
    {
        content: (
            <>
                Decentralization. Your notes remain on your computer, unless you
                specifically set the database connection URL to be a remote instance.
                While building <LogoAsText /> I was (am) homeless, and without a cell
                phone or internet connection for most of the day. There are provided
                components that can display remote images, videos, markdown and more,
                but if you decide to use only media on your own computer in your notes
                and don't configure remote third party integrations, <LogoAsText /> will
                never contact an outside service.
            </>
        ),
    },
    {
        content: (
            <>
                And lastly, <span className={"italic"}>well...</span> because I use it.
                This app was built to support my own research, and as my requirements
                grew so did <LogoAsText />. Whether I'm working on <LogoAsText />{" "}
                directly, or I'm working on my own pursuits outside of software,{" "}
                <LogoAsText /> will remain under active development, with a continually
                growing list of features and improvements.
            </>
        ),
    },
];

export const WhyShouldIUseULLDSection = ({
    delay = 0,
}: WhyShouldIUseULLDSectionProps) => {
    return (
        <div
            /* ref={ref} */
            className={clsx(
                "group/feature relative left-0 min-h-[calc(100vh-76px)] h-fit max-w-[1080px] w-full px-16 flex flex-col justify-center items-start gap-6 z-10 mb-12",
                /* vp?.window.width && vp.window.width < 768 ? "stack" : "flow", */
            )}
        >
            <div className={"w-full flex flex-col justify-center items-start gap-3"}>
                <motion.h2
                    className={clsx(
                        "feature-animate opacity-0 text-foreground text-4xl font-bold  mt-2",
                        ltr ? "translate-x-[-100px]" : "translate-x-[100px]",
                    )}
                    initial={"hide"}
                    whileInView={"show"}
                    variants={{
                        show: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        },
                        hide: {
                            x: ltr ? -100 : 100,
                            opacity: 0,
                            transition: {
                                duration: 0.5,
                                delay,
                            },
                        },
                    }}
                    viewport={{
                        margin: "-80px",
                    }}
                >
                    Why should I use
                    <span className={"inline-block w-16 translate-y-[25%]"}>
                        <AnimatedUlldLogo show={true} height={48} speed={2} />
                    </span>
                    ?
                </motion.h2>
                <motion.h3
                    className={clsx(
                        "feature-animate opacity-0 text-muted-foreground text-2xl font-semibold",
                        ltr ? "translate-x-[-100px]" : "translate-x-[100px]",
                    )}
                    variants={{
                        show: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: delay + 0.25,
                            },
                        },
                        hide: {
                            x: ltr ? -100 : 100,
                            opacity: 0,
                            transition: {
                                duration: 0.5,
                            },
                        },
                    }}
                    initial={"hide"}
                    whileInView={"show"}
                >
                    Like besides the fact that it's free...
                </motion.h3>
            </div>
            <ul className={"list-none space-y-4"}>
                {reasons.map((r, i) => {
                    return (
                        <motion.li
                            key={`reason-${i}`}
                            className={"text-lg grid grid-cols-[32px_1fr] gap-4"}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{
                                margin: "-80px",
                                /* once: process.env.NODE_ENV !== "production", */
                            }}
                        >
                            <motion.div
                                key={`reason-boxContainer-${i}`}
                                className={
                                    "h-full flex flex-col py-3 justify-start items-center overflow-visible"
                                }
                            >
                                <motion.div
                                    key={`reason-box-${i}`}
                                    className={
                                        "float-left overflow-visible w-6 h-6 inline-flex flex-col justify-start items-center rounded relative bg-primary place-self-center"
                                    }
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        scale: 0,
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                    },
                                }}
                                >
                                    <CheckIcon
                                        key={`reason-check-${i}`}
                                        className={
                                            "stroke-white top-0 right-0 scale-150 translate-x-[6px] -translate-y-[4px]"
                                        }
                                        initial="initial"
                                        whileInView={"animate"}
                                        viewport={{
                                            margin: "-80px",
                                            /* once: process.env.NODE_ENV !== "production", */
                                        }}
                                        variants={{
                                            initial: {
                                                pathLength: 0,
                                                opacity: 0,
                                                strokeWidth: 0,
                                            },
                                            animate: {
                                                opacity: 1,
                                                strokeWidth: 3,
                                                pathLength: 1,
                                            },
                                        }}
                                        transition={{
                                            pathLength: {
                                                delay: 2,
                                            }
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                            <span className={"inline-block"}>{r.content}</span>
                        </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};

WhyShouldIUseULLDSection.displayName = "WhyShouldIUseULLDSection";
