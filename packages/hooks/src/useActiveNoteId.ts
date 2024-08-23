import { useEffect, useRef } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useActiveNoteId = (initialNoteId?: number | null) => {
    const [id, setId] = useLocalStorage("active-note-id", initialNoteId as number | undefined)

    const clearId = () => {
            window.localStorage.removeItem("active-note-id")
        }

    return [id, setId, clearId] as [number | undefined, (newId?: number) => void, () => void]
}



export const useActiveNoteIdValue = () => {
    let data = useActiveNoteId()
    const noteId = useRef<number | undefined>(undefined)
    useEffect(() => {
        noteId.current = data[0]
    }, [data])
    return noteId
}
