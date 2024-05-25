import ComingSoon from "#/components/utility/comingSoon";
import { H1 } from "@ulld/embeddable-components/heading";
import React from "react";

interface DocsHomePageProps { }

const DocsHomePage = (props: DocsHomePageProps) => {
    return (
        <>
            <ComingSoon />
        </>
    );
};

DocsHomePage.displayName = "DocsHomePage";

export default DocsHomePage;
