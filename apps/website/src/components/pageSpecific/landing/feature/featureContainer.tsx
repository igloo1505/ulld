"use client";
import React from "react";
import { FeatureContainerProps } from "./types";
import FeatureContainerText from "./featureContainerText";
import FeatureContainerDisplay from "./featureContainerDisplay";
import { useFeatureUIStage } from "./useFeatureUIStage";
import clsx from "clsx";

const FeatureContainer = ({
    orientation = "ltr",
    idx,
    ...props
}: FeatureContainerProps) => {
    const { stage, section } = useFeatureUIStage(idx);
    return (
        <div
            className={clsx(
                "absolute left-0 top-12 h-[calc(100vh-3rem)] w-screen grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12",
                stage === "current" && "z-10",
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
