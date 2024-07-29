import React from 'react'
import { notFound } from 'next/navigation'
import { serverClient } from '@ulld/api/serverClient'
import { PageContentContainer } from '../../layouts/contentContainer'
import { ParsableExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions'
import { NotePageProps } from '../../../utilityFunctions/formatting/formatNoteProps'
import DatabaseMdxPage from '../mdx/database'
import DatabaseNotebook from './database/remoteNotebook';

interface DatbaseNoteProps extends NotePageProps {
    noteType?: ParsableExtensions | null
    rootRelativePath: string
    rootRelativeWithExtension?: string
    absolutePath?: string
}

const DatabaseNote = async (props: DatbaseNoteProps) => {
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
                <DatabaseMdxPage
                    {...props}
                />
            </PageContentContainer>
        )
    }

    if (nt === ".ipynb") {
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
