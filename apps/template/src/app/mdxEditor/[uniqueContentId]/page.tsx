// ULLD: protected-path pageFor:editor/MdxEditorPage
import MdxEditorPage, { PageProps } from "#/corePages/editor/mdxEditor";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const MdxEditorPageTemplate = (props: PageProps) => {
    return (
        <>
            <DisableBookmark />
            <MdxEditorPage {...props} />
        </>
    );
};

MdxEditorPageTemplate.displayName = "MdxEditorPageTemplate";

export default MdxEditorPageTemplate;
