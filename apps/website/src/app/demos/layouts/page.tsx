import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import React from "react";

interface LayoutDemoPageProps { }

const LayoutDemoPage = (props: LayoutDemoPageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/demos/layouts",
                    title: "Demos: Layouts",
                }}
            />
            <ComingSoon />
        </>
    );
};

LayoutDemoPage.displayName = "LayoutDemoPage";

export default LayoutDemoPage;
