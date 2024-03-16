import React from 'react'
import NoteContentObserver from '../observers/noteContentObserver'
import {getRandomId} from "@ulld/utilities/src/utils/identity"
import {noteContainerPrefix } from "@ulld/utilities/src/staticAppProperties/main"


interface ImmediateNoteContentContainerProps {
    children: React.ReactNode
}


/* PRIORITY: Need to handle this mathjax issue much more thoroughly... this is half assed as shit. */
/* RESUME: Need to handle this mathjax issue much more thoroughly... this is half assed as shit. */
export const ImmediateNoteContentContainer = ({ children }: ImmediateNoteContentContainerProps) => {
    const id = `${noteContainerPrefix}${getRandomId(8)}`
    return (
        <>
            <NoteContentObserver id={id} />
            <div
                className={"note-base-layout pt-8 space-y-2 md:space-y-3"}
                id={id}
            >
                {children}
            </div>
        </>
    )
}


ImmediateNoteContentContainer.displayName = "ImmediateNoteContentContainer"

