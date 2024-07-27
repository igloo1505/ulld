import { serverClient } from '@ulld/api/serverClient'
import React from 'react'
import { ReduxProvider } from '@ulld/state/reduxProvider'
import { LazyMdx } from '../../lazyMdx'
import { NoteDetailsSheet } from '../../../toc/noteDetailsSheet'
import { MarkdownFileExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions'
import { NotePageProps } from '../../../../utilityFunctions/formatting/formatNoteProps'
import FileSystemMdxPage from "@ulld/ui/fileSystemMdxPage"
import { AppConfigSchemaOutput } from '@ulld/configschema/types'



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
