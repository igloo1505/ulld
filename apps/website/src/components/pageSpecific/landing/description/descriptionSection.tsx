"use client";
import React, { useState } from "react";
import clsx from "clsx";
import FeatureContainer from "../feature/featureContainer";
import { allFeatures } from "#/staticData/features/allFeatures";
import { getLandingSectionClass } from "#/types/landingSection";
import { useSectionIndex } from "../feature/useSectionIndex";


interface Props {
ready: boolean
    section: string
    }


export const DescriptionSection = ({ready, section}: Props) => {
    const sectionClasses = getLandingSectionClass("description-any", section);

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
                        ready={ready}
                        orientation={i % 2 === 0 ? "ltr" : "rtl"}
                    />
                );
            })}
        </section>
    );
};

DescriptionSection.displayName = "DescriptionSection";
