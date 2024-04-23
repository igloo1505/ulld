"use client"
import { LandingSection, getLandingSectionClass, landingSectionIndex } from "#/types/landingSection";
import React from "react";
import clsx from 'clsx'
import { useSection } from "./useSection";

interface DescriptionSectionProps {
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
    const section = useSection("description")
  return (
    <section
      className={
        clsx("flex flex-col justify-center items-center gap-4", section.className)
      }
    >
      Description here
    </section>
  );
};

DescriptionSection.displayName = "DescriptionSection";
