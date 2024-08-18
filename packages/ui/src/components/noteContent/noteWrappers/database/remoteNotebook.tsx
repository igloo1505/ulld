import dynamic from 'next/dynamic'
import React from 'react'
import { cookies } from 'next/headers'
import { NotePageProps } from '../../../../utilityFunctions/formatting/formatNoteProps.ts'
import { serverClient } from '@ulld/api/serverClient'



interface RemoteNotebookProps extends NotePageProps {
    rootRelativePath: string
    rootRelativeWithExtension: string
}

const DatabaseNotebook = async (props: RemoteNotebookProps) => {
    const nb = await serverClient.notebook.getDatabaseNotebook({
        rootRelativePath: props.rootRelativePath
    })

    let content = nb?.raw ? nb.raw.toString() : undefined
    if(!content){
        return null
    }

    const darkMode = cookies().has("darkMode")

    /* const Notebook = dynamic(() => import("@ulld/notebook/notebook"), { ssr: false }) */
        /* <Notebook */
        /*     content={content} */
        /*     rootRelativePath={props.rootRelativeWithExtension} */
        /*     initialDarkMode={darkMode} */
        /*     prefer={nb ? "db" : "fs"} */
        /* /> */
    return (
        <div>
            Fix this
        </div>
    )

}


DatabaseNotebook.displayName = "RemoteNotebook"


export default DatabaseNotebook;
