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
    /* PRIORITY: Remove this note detail sheet now that it's being added to the slots, but make sure that it actually appears in the proper slot. */
    return <><LazyMdx
        {...props}
        fs={false}
        returnedNote={note}
        mdxParser={props.parsers.mdx}
    />
        {note && <ReduxProvider>
            <NoteDetailsSheet firstSync={note.firstSync} lastSync={note.lastSync} noteId={note.id} />
        </ReduxProvider>}
    </>
}


DatabaseMarkdown.displayName = "RemoteMarkdown"


export default DatabaseMarkdown;
