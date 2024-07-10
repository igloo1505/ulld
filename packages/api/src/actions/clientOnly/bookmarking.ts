import {client} from "../../trpc/client"

export const toggleBookmarkedState = () => document.body.classList.toggle("isBookmarked")

export const toggleBookmark = async (noteId?: number) => {
    if (!noteId) {
        console.log(`No note id was found while toggling bookmarked state`)
        return
    }
    const success = await client.mdx.toggleBookmarkedById.mutate(noteId)
    if (success) {
        toggleBookmarkedState()
    }
}
