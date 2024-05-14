import { LandingSection } from "#/types/landingSection";
import React from "react";
import clsx from "clsx";
import ScrollGestureListener from "#/components/pageSpecific/landing/scrollGestureListener";
import { BlobSection } from "#/components/pageSpecific/landing/sections/blobSection";
import DescriptionWrapper from "#/components/pageSpecific/landing/description/descriptionWrapper";
import staticData from "#/staticData/staticContent.json"

interface HomePageProps {
    searchParams: {
        section: LandingSection;
    };
}


const HomePage = ({ searchParams: { section = "hero" } }: HomePageProps) => {
    return (
        <div
            id={"main-landing-container"}
            className={clsx(
                "group/landingContainer main-landing relative overflow-hidden h-screen w-screen max-h-screen",
                section === "hero" && "section-hero",
                "landingSection-active"
            )}
        >
            <ScrollGestureListener />
            <BlobSection isProduction={staticData.forceProduction || process.env.NODE_ENV === "production" || process.env.OVERRIDE_PRODUCTION === "true"} />
            <DescriptionWrapper />
        </div>
    );
};

HomePage.displayName = "HomePage";

export default HomePage;
