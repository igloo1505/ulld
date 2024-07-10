import { useLocalStorage } from "./useLocalStorage"

export const useActiveNoteId = (initialNoteId: number) => {
    const [id, setId] = useLocalStorage("active-note-id", initialNoteId as number | undefined)

    const clearId = () => {
            window.localStorage.removeItem("active-note-id")
        }

    return [id, setId, clearId] as [number | undefined, (newId?: number) => void, () => void]
}
