"use client";
import React from "react";
import { FeatureContainerProps } from "./types";
import FeatureContainerText from "./featureContainerText";
import FeatureContainerDisplay from "./featureContainerDisplay";
import { useFeatureUIStage } from "./useFeatureUIStage";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";

const FeatureContainer = ({
    orientation = "ltr",
    idx,
    expandDisplay,
    spaceEven,
    displayContainerClasses,
    ...props
}: FeatureContainerProps) => {
    const { stage, section } = useFeatureUIStage(null, idx);
    const vp = useViewport()
    return (
        <div
            className={clsx(
                "absolute group/feature left-0 top-[76px] h-[calc(100vh-76px)] w-screen gap-4 md:gap-6 lg:gap-8 px-8 lg:px-12 pb-8 flex-col md:flex-row justify-center items-center place-items-center",
                stage === "current" && "feature-active z-10",
                spaceEven ? "grid grid-cols-1 md:flex" : "flex",
                expandDisplay && "display-expand",
                (vp?.window.width && vp.window.width < 768) ? "stack" : "flow"
            )}
        >
            {orientation === "ltr" ? (
                <>
                    <FeatureContainerText
                        title={props.title}
                        desc={props.desc}
                        label={props.label}
                        orientation={orientation}
                        stage={stage}
                        section={section}
                        idx={idx}
                    />
                    <FeatureContainerDisplay
                        containerClasses={displayContainerClasses}
                        displayExpand={expandDisplay || spaceEven}
                        orientation={orientation}
                        component={props.component}
                        stage={stage}
                        section={section}
                        idx={idx}
                    />
                </>
            ) : (
                <>
                    <FeatureContainerDisplay
                        orientation={orientation}
                        containerClasses={displayContainerClasses}
                        displayExpand={expandDisplay || spaceEven}
                        component={props.component}
                        stage={stage}
                        section={section}
                        idx={idx}
                    />
                    <FeatureContainerText
                        title={props.title}
                        desc={props.desc}
                        label={props.label}
                        orientation={orientation}
                        stage={stage}
                        section={section}
                        idx={idx}
                    />
                </>
            )}
        </div>
    );
};

FeatureContainer.displayName = "FeatureContainer";

export default FeatureContainer;
