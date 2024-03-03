"use client"
import { indicateBookmarked, setQuickLinkHtmlId } from '#/actions/dom'
import { useEffect } from 'react'
import store from './store'
import { setCurrentNoteData, setCurrentNoteId } from './slices/functionality'
import { usePathname } from 'next/navigation'
import { client } from '#/trpc/client'
import { getHeadingHierarchy } from '#/lib/formatting/getHeadingHierarchy'


export interface ClientsideDomEventsProps {
    bookmarked: boolean
    noteId?: number
    fs: boolean
    noteQuickLinkId?: string
}


const ClientsideNoteEvents = ({ bookmarked, fs, noteId, noteQuickLinkId }: ClientsideDomEventsProps) => {

    let pathname = usePathname()

    useEffect(() => {
        setQuickLinkHtmlId(noteQuickLinkId)
    }, [noteQuickLinkId])


    const checkFsNoteId = async () => {
        let id = await client.getNoteIdByHref.query(pathname)
        if (id !== null) {
            store.dispatch(setCurrentNoteData({
                id,
                currentToc: getHeadingHierarchy()
            }))
            store.dispatch(setCurrentNoteId(id))
        }
    }


    useEffect(() => {
        indicateBookmarked(bookmarked || false)
        if (noteId) {
            store.dispatch(setCurrentNoteData({
                id: noteId,
                currentToc: getHeadingHierarchy()
            }))
        } else if (fs) {
            checkFsNoteId()
        }
    }, [bookmarked, noteId])

    return <></>
}


ClientsideNoteEvents.displayName = "ClientsideDomEvents"


export default ClientsideNoteEvents;
