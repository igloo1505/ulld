import React from 'react'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import DatabaseMarkdown from './database/remoteMarkdown'
import { serverClient } from '@ulld/api'
import { ParsableExtensions } from '@ulld/configschema'
import { NotePageProps } from '../../../utilityFunctions/formatting'
import PageContentContainer from '../../layouts/contentContainer'




interface DatbaseNoteProps extends NotePageProps {
    noteType?: ParsableExtensions | null
    rootRelativePath: string
    rootRelativeWithExtension?: string
    absolutePath?: string
}

const DatabaseNote = async (props: DatbaseNoteProps) => {
    console.log("props: ", props)
    let nt = props.noteType
    if (!nt) {
        let { markdown, notebook } = await serverClient.search.findUnknownDBNoteTypeFromRootRelativePath(props.rootRelativePath)
        if (notebook) {
            nt = ".ipynb"
        } else if (markdown) {
            nt = ".mdx"
        }
    }
    if (nt === ".mdx" || nt === ".md") {
        return (
            <PageContentContainer canBookmark>
                <DatabaseMarkdown
                    {...props}
                />
            </PageContentContainer>
        )
    }

    if (nt === ".ipynb") {
        const DatabaseNotebook = dynamic(() => import('./database/remoteNotebook'), { ssr: false })
        return <PageContentContainer notebook canBookmark>
            <DatabaseNotebook
                {...props}
                rootRelativeWithExtension={props.rootRelativeWithExtension || `${props.rootRelativePath}.ipynb`}
            />
        </PageContentContainer>
    }
    return notFound()
}


DatabaseNote.displayName = "RemoteNote"


export default DatabaseNote;
