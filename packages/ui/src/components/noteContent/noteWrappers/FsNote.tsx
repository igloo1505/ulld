import React from "react";
import { PageContentContainer } from "../../layouts/contentContainer";
import { NotePageProps } from "../../../utilityFunctions/formatting/formatNoteProps";
import FileSystemMdxPage from "@ulld/ui/fileSystemMdxPage";
import MathjaxProvider from "@ulld/utilities/providers-mathjax";
import { ProvidedNoteDetailSheet } from "../../../types/general";

interface FileSystemNoteProps extends NotePageProps { 
    NoteDetailSheet: ProvidedNoteDetailSheet
}

const FileSystemNote = ({NoteDetailSheet, ...props}: FileSystemNoteProps) => {
    if (props.noteProps.format === ".mdx") {
        return (
            <PageContentContainer canBookmark>
                <MathjaxProvider>
                    <FileSystemMdxPage {...props} extension={props.noteProps.format} />
                   <NoteDetailSheet format="mdx" />
                </MathjaxProvider>
            </PageContentContainer>
        );
    }
    if (props.noteProps.format === ".md") {
        return (
            <PageContentContainer canBookmark>
                <FileSystemMdxPage {...props} extension={props.noteProps.format} />
                   <NoteDetailSheet format="mdx" />
            </PageContentContainer>
        );
    }
    if (props.noteProps.format === ".ipynb") {
        /* const FileSystemNotebook = dynamic(() => import('./filesystem/fileSystemNotebook'), { ssr: false }) */
        return (
            <PageContentContainer notebook canBookmark>
                FIX ME
                {/* <FileSystemNotebook */}
                {/*     {...props} */}
                {/* /> */}
                   {/* <NoteDetailSheet format="notebook" /> */}
            </PageContentContainer>
        );
    }
    return null;
};

FileSystemNote.displayName = "FileSystemNote";

export default FileSystemNote;
