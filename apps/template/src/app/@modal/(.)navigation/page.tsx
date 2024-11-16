// ULLD: protected-path pageFor:navigation/FullScreenNavigationMenu
import FullScreenNavigationMenu from "#/components/slots/navigation/fullScreenNavigationMenu";
import React from "react";
import appConfig from "appConfig"
import buildData from "buildData"
import { AppConfigSchemaOutput } from "@ulld/configschema/zod/main";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";

const FullScreenNavigationModalPageTemplate = () => {
    return <FullScreenNavigationMenu
        noteTypes={(appConfig as AppConfigSchemaOutput).noteTypes}
        navConfig={(appConfig as AppConfigSchemaOutput).navigation}
        items={(buildData as unknown as BuildStaticDataOutput).navigationLinks}
        isModal
    />;
};

FullScreenNavigationModalPageTemplate.displayName =
    "FullScreenNavigationModalPageTemplate";

export default FullScreenNavigationModalPageTemplate;
