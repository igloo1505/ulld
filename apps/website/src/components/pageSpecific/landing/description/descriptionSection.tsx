"use client";
import React from "react";
import FeatureContainer from "../feature/featureContainer";
import { allFeatures } from "#/staticData/features/allFeatures";


interface Props {
}


export const DescriptionSection = ({}: Props) => {
    return (
        <section
            className={"relative flex flex-col min-h-[calc(100vh-76px)] h-fit justify-center items-center gap-4 bg-transparent"}
        >
            {allFeatures.map((f, i) => {
                return (
                    <FeatureContainer
                        {...f}
                        key={i}
                        idx={i}
                        orientation={i % 2 === 0 ? "ltr" : "rtl"}
                    />
                );
            })}
        </section>
    );
};

DescriptionSection.displayName = "DescriptionSection";
