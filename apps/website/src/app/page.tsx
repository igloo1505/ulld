import type { LandingSection } from "#/types/landingSection";
import React from "react";
import LandingPage from "#/components/pageSpecific/landing/standard/main";

interface HomePageProps {
    searchParams: {
        section: LandingSection;
    };
}

const HomePage = ({ searchParams: { section = "hero" } }: HomePageProps) => {
    return <LandingPage />;
};

HomePage.displayName = "HomePage";

export default HomePage;
