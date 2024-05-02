import React from 'react'
import { MonacoPageParams } from "@ulld/editor/editorTypes"
import {LatexEditorWithPreview} from "@ulld/ui/math/editorWithPreview"
interface LatexEditorPageProps extends Omit<MonacoPageParams, "searchParams"> {
   searchParams: Omit<MonacoPageParams["searchParams"], "language">
}

const LatexEditorPage = ({params: {
    uniqueContentId
}}: LatexEditorPageProps) => {
return (
        <div className={"w-full h-fit min-h-screen flex flex-col justify-center items-center gap-6"}>
            <div className={"w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] max-w-[calc(100vw-4rem)]"}>
                <LatexEditorWithPreview
                    localStorageKey={uniqueContentId}
                />
            </div>
        </div>
)
}


LatexEditorPage.displayName = "LatexEditorPage"


export default LatexEditorPage;
