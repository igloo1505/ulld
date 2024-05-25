import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import { H1 } from "@ulld/embeddable-components/heading";
import React from "react";

interface DocsHomePageProps { }

const DocsHomePage = (props: DocsHomePageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/docs",
                    title: "Documentation Home",
                }}
            />
            <ComingSoon />
        </>
    );
};

DocsHomePage.displayName = "DocsHomePage";

export default DocsHomePage;
