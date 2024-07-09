"use client"
import React from 'react'
import { MonacoPageParams, EditorLayout } from "../types"
import dynamic from "next/dynamic"
import { ModalPageContainer } from "@ulld/ui/modalPage"
const Editor = dynamic(() => import("../monaco").then((a) => a.CodeEditor), { ssr: false })


const CodeEditorModalPage = ({ params: {
    uniqueContentId
}, searchParams: {
    useExistingValue,
    language
} }: MonacoPageParams) => {
    return (
        <ModalPageContainer
            closeEvent="ulld-editor-close"
        >
            <Editor
                uniqueContentId={uniqueContentId}
                layout={EditorLayout.modal}
                useExisting={useExistingValue === "true"}
                asModalChild
                forceLanguage
                language={language}
                width="min(1024px,85vw)"
                height="min(640px,85vh)"
            />
        </ModalPageContainer>
    )
}


CodeEditorModalPage.displayName = "CodeEditorModalPage"


export default CodeEditorModalPage;
