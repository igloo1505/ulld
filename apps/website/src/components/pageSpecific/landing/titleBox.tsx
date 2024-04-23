import TypingText from "#/lib/typingText";
import Link from "next/link";
import React from "react";
import { LandingSubTitle } from "./subtitle";
import { HighlightButton } from "#/components/general/inputs/highlightButton";
import { LandingSection } from "#/types/landingSection";

interface LandingPageTitleBoxProps { 
}


export const LandingPageTitleBox = (props: LandingPageTitleBoxProps) => {
    return (
        <div
            className={
                "w-full lg:w-[40vw] absolute bottom-12 flex flex-col gap-0 lg:gap-3 justify-center items-center lg:items-start z-10 p-8 scale-0 group-[.section-hero]/landingContainer:scale-100 transition-transform duration-150"
            }
        >
            <h1
                className={
                    "text-[10vw] lg:text-6xl ml-0 text-sky-50 flex flex-row justify-center gap-3 items-start tracking-wide"
                }
            >
                <span>Uh</span>
                <span>Little</span>
                <span>Less</span>
                <span>Dum</span>
            </h1>
            <LandingSubTitle
                className={"mt-[-0.5rem] text-[3vw] md:text-base"}
            />
            <HighlightButton
                className={"mt-4 lg:mt-0"}
                href="/joinMailingList">
                Join our mailing list
            </HighlightButton>
        </div>
    );
};

LandingPageTitleBox.displayName = "LandingPageTitleBox";
