"use client";
import React from "react";
import FeatureContainer from "../feature/featureContainer";
import { allFeatures } from "#/staticData/features/allFeatures";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";


interface Props {
    sectionIndex: number
    top?: number
    titleReady: boolean
}


export const DescriptionSection = ({ sectionIndex: idx, top = 76, titleReady = false }: Props) => {

    return (
        <section
            className={"absolute left-0 right-0 flex flex-col justify-center items-center gap-4 bg-transparent"}
            style={{
                top: `${top}px`,
                minHeight: `calc(100vh - ${top}px)`
            }}
        >
            {allFeatures.map((f, i) => {
                return (
                    <FeatureContainer
                        {...f}
                        idx={i}
                        key={i}
                        sectionIndex={titleReady ? idx : -1}
                        orientation={i % 2 === 0 ? "ltr" : "rtl"}
                        top={top}
                    />
                );
            })}
          <StoryOfUlldSection
                key="stulld"
                sectionIndex={idx}
            />
        </section>
    );
};

DescriptionSection.displayName = "DescriptionSection";
