import { serverClient } from '@ulld/api/serverClient'
import React from 'react'
import { ReduxProvider } from '@ulld/state/reduxProvider'
import { NotePageProps } from '../../../../utilityFunctions/formatting/formatNoteProps'
import { LazyMdx } from '../../lazyMdx'
import { withForwardSlash } from '@ulld/utilities/fsUtils'
import { NoteDetailsSheet } from '../../../toc/noteDetailsSheet'


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
