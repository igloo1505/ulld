import React from "react";
import { LandingSubTitle } from "./subtitle";
import { HighlightButton } from "#/components/general/inputs/highlightButton";
import { cancelLandingTyping } from "#/lib/actions/client";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

interface LandingPageTitleBoxProps {
    show: boolean;
}

export const LandingPageTitleBox = ({ show }: LandingPageTitleBoxProps) => {
    if (!show) return null;
    return (
        <div
            className={clsx(
                "w-full lg:w-[40vw] absolute bottom-12 flex flex-col gap-0 lg:gap-3 justify-center items-center lg:items-start z-10 p-8 scale-0 group-[.section-hero]/landingContainer:scale-100 transition-transform duration-500 group-[.inactive]/blobSection:hidden",
                !show && "hidden",
            )}
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
            <LandingSubTitle className={"mt-[-0.5rem] text-[3vw] md:text-base"} />
        </div>
    );
};

LandingPageTitleBox.displayName = "LandingPageTitleBox";
