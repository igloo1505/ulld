import Analytics from "#/components/utility/analytics";
import { H1 } from "@ulld/embeddable-components/heading";
import React from "react";

interface DocsHomePageProps { }

const DocsHomePage = (props: DocsHomePageProps) => {
    return (
        <div
            className={
                "min-h-screen w-full flex flex-col justify-center items-center"
            }
        >
            <Analytics
                pageView={{
                    path: "/docs",
                    title: "Documentation Home",
                }}
            />
            <H1>Docs Home Page</H1>
        </div>
    );
};

DocsHomePage.displayName = "DocsHomePage";

export default DocsHomePage;
