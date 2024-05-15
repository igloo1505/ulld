"use client"
import { LandingSection, getLandingSectionClass } from "#/types/landingSection";
import { useSearchParams } from "next/navigation";

export const useSectionClasses = (targetSection: LandingSection) => {
    const sp = useSearchParams();
    return getLandingSectionClass(
        targetSection,
        (sp.get("section") as LandingSection) || ("hero" as "hero"),
    );
};
