"use client";
import React from "react";
import clsx from "clsx";
import { useSectionClasses } from "../useSection";
import { useSearchParams } from "next/navigation";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import staticContent from "../../../../staticData/staticContent.json"

interface DescriptionSectionProps {}

export const DescriptionSection = (props: DescriptionSectionProps) => {
  const sectionClasses = useSectionClasses("description");
  const sp = useSearchParams();
  return (
    <section
      className={clsx(
        "flex flex-col justify-center items-center gap-4",
        sectionClasses,
      )}
    >
      <DescriptionLogoTitleBox
        isDescription={sp.get("section") === "description"}
      />
      <div className={"w-16 h-auto"}></div>
      {staticContent.description.map((s, i) => {
        return <p key={i}>{s}</p>;
      })}
    </section>
  );
};

DescriptionSection.displayName = "DescriptionSection";
