// ULLD: protected-path pageFor:editor/EditorModalPage
"use client";
import EditorModalPage from "#/corePages/modal/editor";
import { MonacoPageParams } from "@ulld/editor/editorTypes";
import React from "react";


interface EditorModalPageTemplateProps extends MonacoPageParams { }

const EditorModalPageTemplate = (props: EditorModalPageTemplateProps) => {
    return <EditorModalPage {...props} />;
};

EditorModalPageTemplate.displayName = "EditorModalPageTemplate";

export default EditorModalPageTemplate;
