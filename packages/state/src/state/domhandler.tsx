"use client"
import { useEffect } from 'react'
import { setCurrentNoteData, setCurrentNoteId } from './slices/functionality'
import { store } from '.'
import { getHeadingHierarchy } from '..'
import { setQuickLinkHtmlId, indicateBookmarked } from '../actions/clientOnly/dom'


export interface ClientsideDomEventsProps {
    bookmarked: boolean
    noteId?: number
    fs: boolean
    noteQuickLinkId?: string
}


export const ClientsideNoteEvents = ({ bookmarked, fs, noteId, noteQuickLinkId }: ClientsideDomEventsProps) => {
    useEffect(() => {
        setQuickLinkHtmlId(noteQuickLinkId)
    }, [noteQuickLinkId])


    const checkFsNoteId = async (_id: number) => {
        store.dispatch(setCurrentNoteData({
            id: _id,
            currentToc: getHeadingHierarchy()
        }))
        store.dispatch(setCurrentNoteId(_id))
    }


    useEffect(() => {
        indicateBookmarked(bookmarked || false)
        if (noteId) {
            store.dispatch(setCurrentNoteData({
                id: noteId,
                currentToc: getHeadingHierarchy()
            }))
        } else if (fs && noteId) {
            checkFsNoteId(noteId)
        }
    }, [bookmarked, noteId])

    return <></>
}


ClientsideNoteEvents.displayName = "ClientsideDomEvents"


