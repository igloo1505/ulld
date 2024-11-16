// ULLD: protected-path pageFor:editor/LatexEditorPage
import LatexEditor, { PageProps } from "#/corePages/editor/latexEditor";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const LatexEditorPageTemplate = (props: PageProps) => {
    return (
        <>
            <DisableBookmark />
            <LatexEditor {...props} />
        </>
    );
};

LatexEditorPageTemplate.displayName = "LatexEditorPageTemplate";

export default LatexEditorPageTemplate;
