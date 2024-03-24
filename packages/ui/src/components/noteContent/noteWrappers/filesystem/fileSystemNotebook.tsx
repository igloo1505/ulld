import dynamic from 'next/dynamic'
import React from 'react'
import { cookies } from 'next/headers'
import { serverClient } from '@ulld/api/serverClient'
import { NotePageProps } from '../../../../utilityFunctions/formatting/formatNoteProps'


interface FileSystemNotebookProps extends NotePageProps {
    rootRelativeWithExtension: string
    absolutePath: string
    rootRelativePath: string
    darkMode?: boolean
}

/* /* NOTE: Might not want to return it as a blob or utf string if it's going to be directly interacting with the ipy kernel. */
const FileSystemNotebook = async (props: FileSystemNotebookProps) => {
    console.log("props: ", props)
    let data = await serverClient.ipynb.getFsIpynb({ absolutePath: props.absolutePath })
    const Notebook = dynamic(() => import("../../../jupyter/notebooks/notebook"), { ssr: false })
    const darkMode = cookies().has("darkMode")

    return (
        <Notebook
            path={props.rootRelativeWithExtension}
            content={data}
            prefer="fs"
            darkMode={darkMode}
        />
    )
}


FileSystemNotebook.displayName = "FileSystemNotebook"


export default FileSystemNotebook;
