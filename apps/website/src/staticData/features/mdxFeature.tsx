"use client";
import { useState } from "react";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import mdxScreenshot from "#/assets/screenshots/codeOutputPairs/differentiation/code.png";
import mdxScreenshotOutput from "./featureAssets/mdxScreenshotOutput.png";
import Hint from "../../components/general/hint";
import NextImage from "next/image";
import { AnimatePresence, MotionProps, motion } from "framer-motion";

const Image = motion(NextImage);

const imageMotionProps: MotionProps = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.5,
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        y: -100,
        transition: {
            bounce: 0,
        },
    },
};

export const mdxFeature: FeaturedContainerPropsRequired = {
    label: "Write in MDX",
    title: "Markdown... Xtended",
    expandDisplay: true,
    desc: () => {
        return (
            <div className={"w-full h-fit flex flex-col gap-4 md:gap-6"}>
                <div>
                    <span className={"text-brand font-semibold"}> Mdx </span>{" "}
                    {
                        "takes all of the simplicity of markdown and extends it to support React components directly in your notes. Plots, modals, whiteboards, and more are right at your fingertips, in a language that anyone can learn in a single day."
                    }
                </div>
                <Hint>Click the image to view the output.</Hint>
            </div>
        );
    },
    component: () => {
        const [showCode, setShowCode] = useState(true);
        return (
            <div
                className={"w-full h-full relative flex justify-center items-center"}
            >
                <AnimatePresence>
                    {showCode ? (
                        <Image
                            key="code-image"
                            className={"h-[60vh] w-auto"}
                            src={mdxScreenshot}
                            alt="Screenshot of MDX"
                            onClick={() => setShowCode(false)}
                            initial={imageMotionProps.initial}
                            animate={imageMotionProps.animate}
                            exit={imageMotionProps.exit}
                        />
                    ) : (
                        <Image
                            key="output-image"
                            className={"h-[60vh] w-auto"}
                            src={mdxScreenshotOutput}
                            alt="Screenshot of MDX"
                            onClick={() => setShowCode(true)}
                            initial={imageMotionProps.initial}
                            animate={imageMotionProps.animate}
                            exit={imageMotionProps.exit}
                        />
                    )}
                </AnimatePresence>
            </div>
        );
    },
};
