import DocsPageComponent from "#/components/docUtils/docsPage";
import { getPages } from "#/fumaDocs/sources/myNotes";
import { getPageById } from "#/fumaDocs/utils/getPageById";
import { PageType } from "#/types/general";
import React from "react";

const DocsHomePage = () => {
    let page = getPageById(getPages() as PageType[], "onTheGravitationalNatureOfTime")
    if (!page) {
        throw new Error(
            "Could not find the paper that inspired this f-cking fiasco.",
        );
    }
    return <DocsPageComponent page={page} />;
};

DocsHomePage.displayName = "DocsHomePage";

export default DocsHomePage;
