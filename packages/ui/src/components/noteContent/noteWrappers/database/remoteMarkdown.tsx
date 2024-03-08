import { serverClient } from '@ulld/api'
import { withForwardSlash } from '@ulld/utilities'
import React from 'react'
import { ReduxProvider } from '@ulld/state'
import NoteDetailsSheet from '../../../layout/toc/noteDetailsSheet'
import { NotePageProps } from '../../../../utilityFunctions/formatting'
import LazyMdx from '../../lazyMdx'


interface RemoteMarkdownProps extends NotePageProps {
    rootRelativePath: string
}


const DatabaseMarkdown = async (props: RemoteMarkdownProps) => {
    let p = props.noteProps.rootRelativePathWithExtension ? props.noteProps.rootRelativePathWithExtension : `${props.noteProps.rootRelativePath}${props.noteProps.format || ".mdx"}`
    let note = await serverClient.mdx.getRemoteMdx(withForwardSlash(p))
    return <><LazyMdx
        {...props}
        fs={false}
        returnedNote={note}
    />
        {note && <ReduxProvider>
            <NoteDetailsSheet firstSync={note.firstSync} lastSync={note.lastSync} noteId={note.id} />
        </ReduxProvider>}
    </>
}


DatabaseMarkdown.displayName = "RemoteMarkdown"


export default DatabaseMarkdown;
