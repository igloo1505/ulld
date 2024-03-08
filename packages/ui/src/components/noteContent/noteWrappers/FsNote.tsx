import React from 'react'
import dynamic from 'next/dynamic'
import FileSystemMarkdown from './filesystem/fileSystemMarkdown';
import { ParsableExtensions } from '@ulld/configschema';
import { NotePageProps } from "../../../utilityFunctions/formatting"
import PageContentContainer from '../../layouts/contentContainer';


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
