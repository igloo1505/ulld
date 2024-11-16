// ULLD: protected-path pageFor:editor/EditorPage
import React from "react";
import EditorPage, { PageProps } from "#/corePages/editor/editor";
interface EditorPageTemplateProps extends PageProps { }
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const EditorPageTemplate = (props: EditorPageTemplateProps) => {
    return (
        <>
            <DisableBookmark />
            <EditorPage {...props} />
        </>
    );
};

EditorPageTemplate.displayName = "EditorPageTemplate";

export default EditorPageTemplate;
