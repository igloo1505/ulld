"use client";
import React, { useEffect, useState } from "react";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import { DescriptionSection } from "./descriptionSection";
import { useSectionIndex } from "../feature/useSectionIndex";

const DescriptionWrapper = () => {
    const { idx, section } = useSectionIndex();
    const [ready, setReady] = useState(idx >= 2);

    useEffect(() => {
       if(section === "hero"){
            setReady(false)
        } 
    }, [section])

    return (
        <>
            <DescriptionLogoTitleBox
                sectionIndex={idx}
                section={section}
                setReady={setReady}
                ready={ready}
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
