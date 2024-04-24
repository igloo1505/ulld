"use client"
import React from "react";
import clsx from 'clsx'
import { useSectionClasses } from "./useSection";

interface DescriptionSectionProps {
}

export const DescriptionSection = (props: DescriptionSectionProps) => {
    const sectionClasses = useSectionClasses("description")
  return (
    <section
      className={
        clsx("flex flex-col justify-center items-center gap-4", sectionClasses)
      }
    >
      Description here
    </section>
  );
};

DescriptionSection.displayName = "DescriptionSection";
