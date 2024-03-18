import React from 'react'
import { buttonVariants } from "@ulld/tailwind/button"
import Link from 'next/link'
import { TextAreaCodeEditor } from "@ulld/editor/textAreaEditor"
import { getEditorUrl } from "@ulld/editor/utilityFunctions"
import "../../../node_modules/@uiw/react-textarea-code-editor/dist/editor.css";

interface SandboxHomePageProps {

}


const uniqueEditorContent = "adfabadgadgbvadfafe"
const currentLanguage = "javascript"


const SandboxHomePage = (props: SandboxHomePageProps) => {
    return (
        <div className={"w-full h-fit min-h-screen flex flex-col justify-center items-center bg-background gap-6"}>
            <Link className={buttonVariants({ variant: "outline" })} href={getEditorUrl(uniqueEditorContent, currentLanguage)}>Open Editor Modal</Link>
            <TextAreaCodeEditor
                localStorageKey={uniqueEditorContent}
                language={currentLanguage}
            />
        </div>
    )
}


SandboxHomePage.displayName = "SandboxHomePage"


export default SandboxHomePage;
