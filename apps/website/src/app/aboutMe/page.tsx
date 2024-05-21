import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface AboutMePageProps {}

const AboutMePage = (props: AboutMePageProps) => {
        return (
        <>
            <Analytics
                pageView={{
                    path: "/aboutMe",
                    title: "About Me",
                }}
            />
            <ComingSoon />
        </>
    );
};

AboutMePage.displayName = "AboutMePage";

export default AboutMePage;
