import React from "react";
import clsx from "clsx";
import { StoryOfUlldSection } from "../sections/storyOfULLD/section";
import { DescriptionSection } from "../description/descriptionSection";
import Hero from "./hero";
import JoinWaitingList from "../waitinglist/joinWaitingList";
import NavbarButtonPortal from "#/components/utility/portals/navbar";
import Link from "next/link";
import { navbarButtonClasses } from "#/components/layouts/navbar/navbarButtonGroup";
import { MainSponsorSection } from "../sections/sponsorSection/main";
import { WhyShouldIUseULLDSection } from "../sections/whyShouldIUse/main";

interface HeroProps { }



const LandingPage = (props: HeroProps) => {
    return (
        <div
            className={clsx(
                "min-h-screen h-fit w-full flex flex-col justify-center items-center gap-6",
            )}
        >
            <NavbarButtonPortal>
                <Link className={navbarButtonClasses} href="/configure">
                    Configure
                </Link>
                <Link className={navbarButtonClasses} href="/blog">
                    Blog
                </Link>
            </NavbarButtonPortal>
               <Hero />
                <DescriptionSection
                    key="dsec"
                />
            <JoinWaitingList />
            <WhyShouldIUseULLDSection />
            <MainSponsorSection />
            <StoryOfUlldSection
                key="stulld"
            />
        </div>
    );
};

LandingPage.displayName = "Hero";

export default LandingPage;
