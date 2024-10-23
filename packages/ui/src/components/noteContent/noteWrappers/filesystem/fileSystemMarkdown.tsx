import React from 'react'
import type { MarkdownFileExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions'
import type { AppConfigSchemaOutput } from '@ulld/configschema/types'
import FileSystemMdxPage from "@ulld/ui/fileSystemMdxPage"
import { NoteDetailsSheet } from '../../../toc/noteDetailsSheet'
import type { NotePageProps } from '../../../../utilityFunctions/formatting/formatNoteProps'



interface FileSystemMdProps extends NotePageProps {
    rootRelativeWithExtension: string
    absolutePath: string
    rootRelativePath: string
    extension: MarkdownFileExtensions
    appConfig: AppConfigSchemaOutput
}

const FileSystemMarkdown = async (props: FileSystemMdProps) => {
    return (
            <FileSystemMdxPage 
                {...props}
            />
    )
}


FileSystemMarkdown.displayName = "FileSystemMd"


export default FileSystemMarkdown;
