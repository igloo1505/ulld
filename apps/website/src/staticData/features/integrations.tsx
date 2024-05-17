"use client"
import { LogoAsText } from "#/components/general/logoAsText";
import { FeatureDescContainer } from "#/components/pageSpecific/landing/feature/featureDescContainer";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import { buttonVariants } from "@ulld/tailwind/button";
import clsx from 'clsx'
import Link from "next/link";
import { TechIconLink } from "./featureAssets/communityTechIcons/techIconLink";
import { useInView } from "framer-motion";
import { useRef } from "react";


export const integrationsFeature: FeaturedContainerPropsRequired = {
    label: () => {
        return (
            <span className={"relative"}>
                <span
                    className={"text-3xl absolute left-0 top-[50%] translate-y-[-50%]"}
                >
                    ∫
                </span>
                <span className={"pl-2"}>ntegration</span>
            </span>
        );
    },
    title: () => {
        return (
            <div
                className={
                    "h-[40px] flex flex-row justify-start items-center flex-wrap"
                }
            >
                An integral part of{" "}
                <span className={"pl-1 inline-block w-16"}>
                    <AnimatedUlldLogo show={true} height={32} speed={2} />
                </span>
            </div>
        );
    },
    desc: ({orientation}) => {
        return (
            <FeatureDescContainer>
                <span>
                    With{" "}
                    <span
                        className={
                            "underline decoration-2 underline-offset-4 decoration-yellow-400"
                        }
                    >
                        day 1
                    </span>{" "}
                    support for integration with Google Calendar and Jupyter and more
                    external integrations planned for the near future, integrating{" "}
                    <LogoAsText fontSize={18} /> with your existing workflow should be
                    painless.
                </span>
                <div className={clsx("w-full px-8 flex flex-row items-center", orientation === "rtl" ? "justify-end" : "justify-start")}>
                    <Link href="/featureRequest" className={buttonVariants()}>Submit a feature request</Link>
                </div>
            </FeatureDescContainer>
        );
    },
    component: ({shouldShow: isInView}) => {
        const techIconClasses = "max-w-full max-h-full h-full w-auto md:w-full [&>img]:h-full [&>img]:w-auto md:[&>img]:w-[5vw] md:[&>img]:h-auto inline-block"
        return (
            <div
                className={
                    "w-auto h-[min(72px,10vh)] max-h-[min(72px,10vh)] flex flex-row justify-around items-center md:h-auto gap-4 md:gap-2 md:gap-y-8 place-items-center md:w-[30vw] md:max-h-full"
                }
            >
                <TechIconLink
                    show={isInView}
                    index={1}
                    className={techIconClasses}
                    icon="jupyter"
                />
                <TechIconLink
                    show={isInView}
                    index={2}
                    className={techIconClasses}
                    icon="mdx"
                />
                <TechIconLink
                    show={isInView}
                    index={3}
                    className={techIconClasses}
                    icon="latex"
                />
                <TechIconLink
                    show={isInView}
                    index={4}
                    className={techIconClasses}
                    icon="googleCalendar"
                />
            </div>
        );
    },
};
