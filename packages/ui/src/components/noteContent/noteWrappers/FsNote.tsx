import React from 'react'
import dynamic from 'next/dynamic'
import FileSystemMarkdown from './filesystem/fileSystemMarkdown';
import { PageContentContainer } from '../../layouts/contentContainer';
import { ParsableExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions';
import { NotePageProps } from '../../../utilityFunctions/formatting/formatNoteProps';


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
                <FileSystemMarkdown
                    {...props}
                    extension={props.noteType}

                />
            </PageContentContainer>
        )
    }
    if (props.noteType === ".md") {
        return (
            <PageContentContainer canBookmark>
                <FileSystemMarkdown
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
                <FileSystemNotebook
                    {...props}
                />
            </PageContentContainer>
        )
    }
    return null
}


FileSystemNote.displayName = "FileSystemNote"


export default FileSystemNote;
