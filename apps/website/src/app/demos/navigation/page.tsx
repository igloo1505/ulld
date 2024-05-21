import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface NavigationDemoPageProps { }

const NavigationDemoPage = (props: NavigationDemoPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/demos/navigation",
                    title: "Demos: Navigation",
                }}
            />
            <ComingSoon />
        </>
    );
};

NavigationDemoPage.displayName = "NavigationDemoPage";

export default NavigationDemoPage;
