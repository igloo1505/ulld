import React from "react";
import DocsPageComponent from "#/components/docUtils/docsPage";
import { getPageById } from "#/fumaDocs/utils/getPageById";
import { PageType } from "#/types/general";
import { getPages } from "sources/demos";


const DemosPage = () => {

    let page = getPageById(getPages() as PageType[], "demosHome");

    if (!page) {
        throw new Error("No demo home page found");
    }

    return <DocsPageComponent page={page} />;
};

DemosPage.displayName = "DemosPage";

export default DemosPage;
