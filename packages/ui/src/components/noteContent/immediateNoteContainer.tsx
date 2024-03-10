import { getRandomId } from '@ulld/utilities'
import React from 'react'
import NoteContentObserver from '../observers/noteContentObserver'


interface ImmediateNoteContentContainerProps {
    children: React.ReactNode
}

export const noteContainerPrefix = "note-container-"

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

