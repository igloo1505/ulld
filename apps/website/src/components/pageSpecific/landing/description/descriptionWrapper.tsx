"use client";
import React, { useEffect, useState } from "react";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import { DescriptionSection } from "./descriptionSection";
import { useSectionIndex } from "../feature/useSectionIndex";
import { usePathname } from "next/navigation";

const DescriptionWrapper = () => {
    const { idx, section } = useSectionIndex();
    const pathname = usePathname()
    const [ready, setReady] = useState(idx >= 2);

    useEffect(() => {
       if(section === "hero" || pathname !== "/"){
            setReady(false)
        } 
    }, [section, pathname])

    return (
        <>
            <DescriptionLogoTitleBox
                sectionIndex={idx}
                section={section}
                setReady={setReady}
                ready={ready}
                forceFalse={pathname !== "/"}
            />
            <DescriptionSection 
                section={section}
                ready={ready}
            />
            <StoryOfUlldSection />
        </>
    );
};

DescriptionWrapper.displayName = "DescriptionWrapper";

export default DescriptionWrapper;
