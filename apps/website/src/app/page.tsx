import React from "react";
import LandingPage from "#/components/pageSpecific/landing/standard/main";

interface HomePageProps {
}

const HomePage = ({ }: HomePageProps) => {
    return <LandingPage />;
};

HomePage.displayName = "HomePage";

export default HomePage;
