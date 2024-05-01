"use client";
import React from "react";
import clsx from "clsx";
import { useLandingSection } from "../useSection";
import { useSearchParams } from "next/navigation";
import FeatureContainer from "../feature/featureContainer";
import { allFeatures } from "#/staticData/features/allFeatures";
import { getLandingSectionClass, orderedSections } from "#/types/landingSection";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";



export const DescriptionSection = () => {
    const section = useLandingSection();
    const sectionIndex = orderedSections.indexOf(section) || 0
    const sectionClasses = getLandingSectionClass("description-any", section);
    const sp = useSearchParams();
    return (
        <section
            className={clsx(
                "relative flex flex-col justify-center items-center gap-4 bg-transparent",
                sectionClasses,
            )}
        >
            {allFeatures.map((f, i) => {
                return (
                    <FeatureContainer
                        {...f}
                        idx={i}
                        key={i}
                        orientation={i % 2 === 0 ? "ltr" : "rtl"}
                    />
                );
            })}
        </section>
    );
};

DescriptionSection.displayName = "DescriptionSection";
