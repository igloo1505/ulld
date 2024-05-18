"use client";
import { useState } from "react";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import mdxScreenshot from "#/assets/screenshots/codeOutputPairs/differentiation/code.png";
import mdxScreenshotOutput from "./featureAssets/mdxScreenshotOutput.png";
import Hint from "../../components/general/hint";
import NextImage from "next/image";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import ImageCarousel from "#/components/media/imageCarousel/main";

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
    /* expandDisplay: true, */
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
        return (
            <ImageCarousel 
                images={[
                    {
                        src: mdxScreenshot,
                        alt: "MDX Code",
                        className: "w-full lg:w-auto lg:h-full"
                    },
                    {
                        src: mdxScreenshotOutput,
                        alt: "MDX Output"
                    }
                ]}
            />
        );
    },
};
