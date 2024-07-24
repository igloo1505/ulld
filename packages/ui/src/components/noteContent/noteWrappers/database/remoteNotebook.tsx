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
    const nb = await serverClient.ipynb.getDatabaseNotebook({
        rootRelativePath: props.rootRelativePath
    })

    let content = nb?.raw ? nb.raw.toString() : undefined

    const Notebook = dynamic(() => import("../../../jupyter/notebooks/notebook"), { ssr: false })
    const darkMode = cookies().has("darkMode")

    return (
        <Notebook
            content={content}
            path={props.rootRelativeWithExtension}
            darkMode={darkMode}
            prefer={nb ? "db" : "fs"}
        />
    )

}


DatabaseNotebook.displayName = "RemoteNotebook"


export default DatabaseNotebook;
