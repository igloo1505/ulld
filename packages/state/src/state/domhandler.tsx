"use client"
import { useEffect } from 'react'
import { setCurrentNoteData, setCurrentNoteId } from './slices/functionality'
import { getHeadingHierarchy } from '../formatting/getHeadingHierarchy'
import { setQuickLinkHtmlId, indicateBookmarked } from '../actions/clientOnly/dom'
import {useActiveNoteId} from "@ulld/hooks/useActiveNoteId"
import {useUlldStore} from "@ulld/hooks/useUlldStore"


export interface ClientsideDomEventsProps {
    bookmarked: boolean
    noteId?: number | null
    fs: boolean
    noteQuickLinkId?: string | null
}


export const ClientsideNoteEvents = ({ bookmarked, fs, noteId: _noteId, noteQuickLinkId }: ClientsideDomEventsProps) => {
    const [noteId, setNoteId, clearId] = useActiveNoteId(_noteId)
    const store = useUlldStore()

    useEffect(() => {
        setQuickLinkHtmlId(noteQuickLinkId)
    }, [noteQuickLinkId])


    const checkFsNoteId = async (_id: number) => {
        store?.dispatch(setCurrentNoteData({
            id: _id,
            currentToc: getHeadingHierarchy()
        }))
        store?.dispatch(setCurrentNoteId(_id))
    }


    useEffect(() => {
        indicateBookmarked(bookmarked || false)
        if (_noteId) {
            setNoteId(_noteId)
            store?.dispatch(setCurrentNoteData({
                id: _noteId,
                currentToc: getHeadingHierarchy()
            }))
        } else if (fs && _noteId) {
            checkFsNoteId(_noteId)
        }
        if(!_noteId){
            clearId()
        }
    }, [bookmarked, _noteId])

    return null
}


ClientsideNoteEvents.displayName = "ClientsideDomEvents"


