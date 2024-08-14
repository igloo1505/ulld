import React from 'react'
import { PageContentContainer } from '../../layouts/contentContainer';
import { NotePageProps } from '../../../utilityFunctions/formatting/formatNoteProps';
import FileSystemMdxPage from "@ulld/ui/fileSystemMdxPage"


interface FileSystemNoteProps extends NotePageProps {
}


const FileSystemNote = (props: FileSystemNoteProps) => {
    if (props.noteProps.format === ".mdx") {
        return (
            <PageContentContainer canBookmark>
                <FileSystemMdxPage
                    {...props}
                    extension={props.noteProps.format}

                />
            </PageContentContainer>
        )
    }
    if (props.noteProps.format === ".md") {
        return (
            <PageContentContainer canBookmark>
                <FileSystemMdxPage
                    {...props}
                    extension={props.noteProps.format}
                />
            </PageContentContainer>
        )
    }
    if (props.noteProps.format === ".ipynb") {
        /* const FileSystemNotebook = dynamic(() => import('./filesystem/fileSystemNotebook'), { ssr: false }) */
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
