import React from "react";
import clsx from "clsx";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";
import { DescriptionSection } from "../description/descriptionSection";
import Hero from "./hero";

interface HeroProps { }

const LandingPage = (props: HeroProps) => {
    return (
        <div
            className={clsx(
                "min-h-screen h-fit w-full flex flex-col justify-center items-center gap-6",
            )}
        >
               <Hero />
                <DescriptionSection
                    key="dsec"
                />
            <StoryOfUlldSection key="stulld" />
        </div>
    );
};

LandingPage.displayName = "Hero";

export default LandingPage;
