"use client";
import React from "react";
import clsx from "clsx";
import { useLandingSection, useSectionClasses } from "../useSection";
import { useSearchParams } from "next/navigation";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import FeatureContainer from "../feature/featureContainer";
import { allFeatures } from "#/staticData/features/allFeatures";
import { getLandingSectionClass } from "#/types/landingSection";

interface DescriptionSectionProps {}


export const DescriptionSection = (props: DescriptionSectionProps) => {
  const section = useLandingSection()
    const sectionClasses = getLandingSectionClass("description-any", section)
  const sp = useSearchParams();
  return (
    <section
      className={clsx(
        "relative flex flex-col justify-center items-center gap-4 bg-transparent",
        sectionClasses,
      )}
    >
      <DescriptionLogoTitleBox
        isDescription={sp.get("section")?.startsWith("description") || false}
      />
     {allFeatures.map((f, i) => {
     return <FeatureContainer
                    {...f}
                    idx={i}
                    key={i}
                    orientation={i % 2 === 0 ? "ltr" : "rtl"}
                />
            })}
    </section>
  );
};

DescriptionSection.displayName = "DescriptionSection";
