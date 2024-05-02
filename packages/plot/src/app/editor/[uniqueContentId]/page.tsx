"use client"
import { MonacoPageParams, EditorLayout } from "@ulld/editor/editorTypes"
import dynamic from "next/dynamic"
import React from 'react'



const CodeEditor = dynamic(() => import("@ulld/editor/ide").then((a) => a.CodeEditor), { ssr: false })


const CodeEditorPage = ({
    params: {
        uniqueContentId
    },
    searchParams: {
        language
    }
}: MonacoPageParams) => {
    return (
        <div className={"w-full h-fit min-h-screen flex flex-col justify-center items-center gap-6"}>
            <CodeEditor
                uniqueContentId={uniqueContentId}
                layout={EditorLayout.modal}
                onChange={(val) => console.log(`value`, val)}
                language={language}
            />
        </div>

    )
}


CodeEditorPage.displayName = "CodeEditorPage"


export default CodeEditorPage;
