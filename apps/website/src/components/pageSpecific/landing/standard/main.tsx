import React from "react";
import clsx from "clsx";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";
import { DescriptionSection } from "../description/descriptionSection";
import Hero from "./hero";
import JoinWaitingList from "../waitinglist/joinWaitingList";
import Analytics from "#/components/utility/analytics";

interface HeroProps { }

const LandingPage = (props: HeroProps) => {
    return (
        <div
            className={clsx(
                "min-h-screen h-fit w-full flex flex-col justify-center items-center gap-6",
            )}
        >
            <Analytics 
                pageView={{
                    path: "/",
                    title: "Home"
                }}
            />
               <Hero />
                <DescriptionSection
                    key="dsec"
                />
            <JoinWaitingList />
            <StoryOfUlldSection key="stulld" />
        </div>
    );
};

LandingPage.displayName = "Hero";

export default LandingPage;
