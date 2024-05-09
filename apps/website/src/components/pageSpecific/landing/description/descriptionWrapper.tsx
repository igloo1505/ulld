"use client";
import React, { useState } from "react";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import { DescriptionSection } from "./descriptionSection";
import { useSectionIndex } from "../feature/useSectionIndex";

const DescriptionWrapper = () => {
    const { idx, section } = useSectionIndex();
    console.log("idx there: ", idx)
    const [ready, setReady] = useState(idx >= 2);
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
