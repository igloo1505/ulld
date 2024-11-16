// ULLD: protected-path pageFor:dashboard/LandingPage
import React from "react";
import LandingPageComponent from "#/components/slots/landingPage/main";
import appConfig from "appConfig"
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";

interface LandingPageProps { }

const LandingPage = async (props: LandingPageProps) => {
    return <LandingPageComponent
        {...props}
        config={appConfig as AppConfigSchemaOutput}
    />;
};

LandingPage.displayName = "LandingPage";

export default LandingPage;
