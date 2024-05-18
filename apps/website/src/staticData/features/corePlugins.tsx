"use client";
import { useRef, useState } from "react";
import NextImage from "next/image";
import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@ulld/tailwind/button";
import Link from "next/link";
import { FeatureDescContainer } from "#/components/pageSpecific/landing/feature/featureDescContainer";
import { slideShowScreenshots } from "./featureAssets/slideShowScreenshots";
import staticContent from "staticContent"

const maxIndex = 11;
const Image = motion(NextImage);


/* TODO: Come back here and animate this image again. It's currently just swapping without any transition at all. */
/* TODO: Make those images scroll while the description stays fixed when it's flex-row, similar to Vercel's page with that stationary box on the left. */

export const corePluginsFeature: FeaturedContainerPropsRequired = {
    label: "Built to quantize gravity",
    title: "Applicable Everywhere",
    expandDisplay: true,
    displayContainerClasses: "pt-0 md:pt-4 min-h-[30vh]",
    desc: () => {
        return (
            <FeatureDescContainer>
                <span>
                    <LogoAsText fontSize={18} /> was built by a single developer with a
                    background in physics to handle his own research after becoming
                    frustrated with other options. There's out of the box support for
                    equations, snippets, bibliography management, task lists, whiteboards,
                    and much, <em>much</em> more.
                </span>
                <Link className={buttonVariants({})} href={staticContent.links.demos.myNotes}>
                    His Notes
                </Link>
            </FeatureDescContainer>
        );
    },
    component: () => {
        const [currentIndex, setCurrentIndex] = useState(1);
        const timer = useRef<NodeJS.Timeout | null>(null);
        const shouldAbort = useRef<boolean>(false);
        const cycleImages = (idx: number = 1) => {
            const nextIndex = idx >= maxIndex ? 1 : idx + 1;
            setCurrentIndex(nextIndex);
            if (!shouldAbort.current) {
                const _timer = setTimeout(() => {
                    cycleImages(nextIndex);
                }, 5000);
                timer.current = _timer;
            }
        };

        const handleClick = () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            cycleImages(currentIndex);
        };
        return (
            <div
                className={
                    "w-full h-full flex flex-col justify-center items-center max-w-full max-h-full p-8 lg:p-6"
                }
            >
                <AnimatePresence>
                    {slideShowScreenshots.map((item, i) => {
                        return i === currentIndex - 1 ? (
                            <Image
                                onClick={handleClick}
                                src={item.src}
                                className="max-w-full object-contain h-full w-auto max-h-[30vh] lg:max-h-[60vh]"
                                alt="Core Plugin Image"
                                exit={{
                                    x: -100,
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.5,
                                        duration: 1,
                                        type: "linear",
                                    },
                                }}
                                initial={{
                                    opacity: 0,
                                    x: 100,
                                }}
                            /* whileInView={ */
                            /*     currentIndex === i + 1 ? imageVariants.show : imageVariants.hide */
                            /* } */
                            />
                        ) : null;
                    })}
                </AnimatePresence>
            </div>
        );
    },
};
