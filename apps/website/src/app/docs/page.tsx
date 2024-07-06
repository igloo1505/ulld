import { DocsHomeContainer } from "#/components/docUtils/docsHome/container";
import React from "react";

interface DocsHomePageProps { }

const DocsHomePage = (props: DocsHomePageProps) => {
    return (
        <div
            className={
                "w-full h-full min-h-screen flex justify-center items-center bg-background"
            }
        >
            <DocsHomeContainer />
        </div>
    );
};

DocsHomePage.displayName = "DocsHomePage";

export default DocsHomePage;
