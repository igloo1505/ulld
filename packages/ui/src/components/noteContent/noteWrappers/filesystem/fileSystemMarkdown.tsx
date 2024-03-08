import { serverClient } from '@ulld/api'
import { MarkdownFileExtensions } from '@ulld/configschema'
import React from 'react'
import { NotePageProps } from '../../../../utilityFunctions/formatting'
import NoteDetailsSheet from '../../../layout/toc/noteDetailsSheet'
import { ReduxProvider } from '@ulld/state'
import LazyMdx from '../../lazyMdx'



interface FileSystemMdProps extends NotePageProps {
    rootRelativeWithExtension: string
    absolutePath: string
    rootRelativePath: string
    extension: MarkdownFileExtensions
}


const FileSystemMarkdown = async (props: FileSystemMdProps) => {
    let data = await serverClient.mdx.getFsMdx({
        rootRelativePath: props.rootRelativePath,
        extension: props.extension
    })
    return (
        <>
            <LazyMdx
                markdown={data}
                slug={props.slug}
                docType={props.docType}
                fs={true}
            />
            {data && <ReduxProvider>
                <NoteDetailsSheet
                    noteId={props.slug}
                />
            </ReduxProvider>}
        </>
    )
}


FileSystemMarkdown.displayName = "FileSystemMd"


export default FileSystemMarkdown;
