import DocsPageComponent from "#/components/docUtils/docsPage";
import { getPageById } from "#/fumaDocs/utils/getPageById";
import { PageType } from "#/types/general";
import React from "react";
import { getPages } from "sources/demos";

interface MyNotesPageProps {
    searchParams: {
        id?: string;
    };
}

const MyNotesPage = ({ searchParams }: MyNotesPageProps) => {
    const docHomeId = searchParams.id || "demosHome";

    let page = getPageById(getPages() as PageType[], docHomeId);

    if (!page) {
        throw new Error("No navigation demo found");
    }

    return <DocsPageComponent page={page} id={docHomeId} />;
};

MyNotesPage.displayName = "MyNotesPage";

export default MyNotesPage;
