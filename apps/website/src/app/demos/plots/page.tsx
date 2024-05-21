import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface PlotDemoPageProps { }

const PlotDemoPage = (props: PlotDemoPageProps) => {
    return <>
        <Analytics
            pageView={{
                path: "/demos/plots",
                title: "Demos: Plots",
            }}
        />
        <ComingSoon />
    </>
};

PlotDemoPage.displayName = "PlotDemoPage";

export default PlotDemoPage;
