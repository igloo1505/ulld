import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FeatureContainerProps, FeatureUIStage } from "./types";
import { useShouldShowFeature } from "./useInitialFeatureDelay";
import { LandingSection } from "#/types/landingSection";
import clsx from 'clsx'

interface FeatureContainerDisplayProps
    extends Pick<FeatureContainerProps, "orientation" | "component"> { 
    stage: FeatureUIStage
    idx: number
    section: LandingSection | string
    displayExpand?: boolean
    containerClasses?: string
    displayDelay?: number
}


const FeatureContainerDisplay = ({
    component,
    orientation,
    stage: _stage,
    idx,
    displayExpand,
    containerClasses,
    section,
    displayDelay = 0.5
}: FeatureContainerDisplayProps) => {
    const scope = useRef<HTMLDivElement>(null!);
    const [animFinished, setAnimFinished] = useState(false)
    const stage = useShouldShowFeature(scope, _stage, idx, section === "hero", section);
    const Component = component;
    useEffect(() => {
       if(stage !== "current"){
            setAnimFinished(false)
        } 
    }, [stage])
    return (
        <motion.div
            className={
                clsx("w-full max-h-[60vh] md:h-full flex flex-col justify-center items-center origin-center p-8", displayExpand && "h-full", containerClasses)
            }
            ref={scope}
            initial="hidden"
            animate={stage}
            variants={{
                hidden: {
                    scale: 0,
                    opacity: 0,
                    x: orientation === "ltr" ? 200 : -200,
                },
                current: {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: displayDelay,
                        type: "spring",
                        stiffness: 100,
                        
                    },
                },
                past: {
                    scale: 0,
                    opacity: 0,
                    x: orientation === "ltr" ? 200 : -200,
                    transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                    },
                },
            }}
            onAnimationComplete={() => setAnimFinished(true)}
        >
            <Component animFinished={animFinished} section={section} shouldShow={stage === "current"} orientation={orientation} />
        </motion.div>
    );
};

FeatureContainerDisplay.displayName = "FeatureContainerDisplay";

export default FeatureContainerDisplay;
