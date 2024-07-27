import React from 'react'
import dynamic from 'next/dynamic'
import { PageContentContainer } from '../../layouts/contentContainer';
import { ParsableExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions';
import { NotePageProps } from '../../../utilityFunctions/formatting/formatNoteProps';
import FileSystemMdxPage from "@ulld/ui/fileSystemMdxPage"


interface FileSystemNoteProps extends NotePageProps {
    noteType: ParsableExtensions
    rootRelativeWithExtension: string
    absolutePath: string
    rootRelativePath: string
}


const FileSystemNote = (props: FileSystemNoteProps) => {
    if (props.noteType === ".mdx") {
        return (
            <PageContentContainer canBookmark>
                <FileSystemMdxPage
                    {...props}
                    extension={props.noteType}

                />
            </PageContentContainer>
        )
    }
    if (props.noteType === ".md") {
        return (
            <PageContentContainer canBookmark>
                <FileSystemMdxPage
                    {...props}
                    extension={props.noteType}
                />
            </PageContentContainer>
        )
    }
    if (props.noteType === ".ipynb") {
        const FileSystemNotebook = dynamic(() => import('./filesystem/fileSystemNotebook'), { ssr: false })
        return (
            <PageContentContainer notebook canBookmark>
                FIX ME
                {/* <FileSystemNotebook */}
                {/*     {...props} */}
                {/* /> */}
            </PageContentContainer>
        )
    }
    return null
}


FileSystemNote.displayName = "FileSystemNote"


export default FileSystemNote;
