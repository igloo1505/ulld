// ULLD: protected-path pageFor:navigation/FullScreenNavigationMenu
import FullScreenNavigationMenu from "#/components/slots/navigation/fullScreenNavigationMenu";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { AnyPageParams, AppConfigSchemaOutput } from "@ulld/types";
import appConfig from "appConfig";
import buildData from "buildData";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const FullScreenNavigationPageTemplate = async (props: AnyPageParams) => {
    return (
        <>
            <DisableBookmark />
            <FullScreenNavigationMenu
                {...props}
                isModal={false}
                noteTypes={appConfig.noteTypes as AppConfigSchemaOutput["noteTypes"]}
                navConfig={appConfig.navigation as AppConfigSchemaOutput["navigation"]}
                items={
                    buildData.navigationLinks as BuildStaticDataOutput["navigationLinks"]
                }
            />
        </>
    );
};

FullScreenNavigationPageTemplate.displayName =
    "FullScreenNavigationPageTemplate";

export default FullScreenNavigationPageTemplate;
