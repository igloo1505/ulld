import { serverLogger } from '@ulld/logger/server'
import React from 'react'
import { NotePageProps } from '../../utilityFunctions/formatting/formatNoteProps'
import ResetPathDependentComponents from '../landing/hero/util/resetPathDependentComponents'
import DatabaseNote from './noteWrappers/DatabaseNote'
import FsNote from './noteWrappers/FsNote'


export const IndividualNoteSwitch = async (props: Omit<NotePageProps, "noteType" | "rootRelativeWithExtension" | "absolutePath" | "rootRelativePath">) => {
    const { noteProps } = props
    serverLogger.info(noteProps, { label: "Note Props", component: "IndividualNoteSwitch" })

    if (noteProps.useFs) {
        return (
            <>
                <ResetPathDependentComponents />
                <FsNote
                    {...props}
                    noteType={noteProps.format}
                    rootRelativeWithExtension={noteProps.rootRelativePathWithExtension}
                    absolutePath={noteProps.absolutePath}
                    rootRelativePath={noteProps.rootRelativePath}
                />
            </>
        )
    }

    if (!noteProps.useFs) {
        return (
            <>
                <ResetPathDependentComponents />
                <DatabaseNote
                    {...props}
                    noteType={noteProps.format}
                    rootRelativeWithExtension={noteProps.rootRelativePathWithExtension}
                    absolutePath={noteProps.absolutePath}
                    rootRelativePath={noteProps.rootRelativePath}
                />
            </>
        )
    }
    return null
}


IndividualNoteSwitch.displayName = "RemoteMdx"
