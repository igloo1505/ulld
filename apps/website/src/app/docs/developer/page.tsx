import Analytics from "#/components/utility/analytics";
import ComingSoon from "#/components/utility/comingSoon";
import { H1 } from "@ulld/embeddable-components/heading";
import React from "react";

interface DeveloperDocsHomePageProps { }

const DeveloperDocsHomePage = (props: DeveloperDocsHomePageProps) => {
    return (
        <>
            <Analytics
                pageView={{
                    path: "/docs/developer",
                    title: "Documentation: Developer",
                }}
            />
            <ComingSoon />
        </>
    );
};

DeveloperDocsHomePage.displayName = "DeveloperDocsHomePage";

export default DeveloperDocsHomePage;
