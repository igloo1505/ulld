import TypingText from "#/lib/typingText";
import Link from "next/link";
import React from "react";
import { LandingSubTitle } from "./subtitle";

interface LandingPageTitleBoxProps { }

const title = "Uh Little Less Dum";

export const LandingPageTitleBox = (props: LandingPageTitleBoxProps) => {
    return (
        <div
            className={
                "lg:w-[40vw] absolute bottom-12 flex flex-col gap-3 justify-center items-start z-10 pl-8 py-8"
            }
        >
            <h1
                className={
                    "text-6xl ml-0 text-sky-50 flex flex-row justify-center gap-3 items-start tracking-wide"
                }
            >
                <span>Uh</span>
                <span>Little</span>
                <span>Less</span>
                <span>Dum</span>
            </h1>
            <LandingSubTitle />
        </div>
    );
};

LandingPageTitleBox.displayName = "LandingPageTitleBox";
