"use client";
import React from "react";
import clsx from "clsx";
import { useSectionClasses } from "../useSection";
import { useSearchParams } from "next/navigation";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import staticContent from "../../../../staticData/staticContent.json"

interface DescriptionSectionProps {}

/* TODO: Add an animation to animate in the rest of the description after just the title box is rendered. The title box looks great in the center because the nucleus collapses into a flashing star that ends right on top of the logo. Let that happen, and then afterwards move that text up to the top and fade in the description content. */
export const DescriptionSection = (props: DescriptionSectionProps) => {
  const sectionClasses = useSectionClasses("description");
  const sp = useSearchParams();
  return (
    <section
      className={clsx(
        "relative flex flex-col justify-center items-center gap-4 bg-transparent",
        sectionClasses,
      )}
    >
      <DescriptionLogoTitleBox
        isDescription={sp.get("section") === "description"}
      />
      {staticContent.description.map((s, i) => {
        return <p key={i}>{s}</p>;
      })}
    </section>
  );
};

DescriptionSection.displayName = "DescriptionSection";
