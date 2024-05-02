import React from 'react'
import "../../../node_modules/@uiw/react-textarea-code-editor/dist/editor.css";
import FullFormVisualTest from '#/testComponents/fullForm'
import { useRouter } from 'next/router';

interface SandboxHomePageProps {

}


const SandboxHomePage = (props: SandboxHomePageProps) => {
    return (
            <FullFormVisualTest/>
    )
}


SandboxHomePage.displayName = "SandboxHomePage"


export default SandboxHomePage;
