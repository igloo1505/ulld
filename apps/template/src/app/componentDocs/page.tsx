import ComponentDocsListPageTemplate, {
    PageProps,
} from "#/corePages/componentDocs/componentDocsListPage";
import React from "react";
import buildData from "buildData";
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

interface ComponentDocsListPageProps extends PageProps { }

const ComponentDocsListPage = (props: ComponentDocsListPageProps) => {
    return (
        <>
            <DisableBookmark />
            <ComponentDocsListPageTemplate
                {...props}
                items={(buildData as unknown as BuildStaticDataOutput).componentDocs}
            />
        </>
    );
};

ComponentDocsListPage.displayName = "ComponentDocsListPage";

export default ComponentDocsListPage;
