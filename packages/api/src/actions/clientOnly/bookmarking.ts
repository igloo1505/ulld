import { client } from "../../trpc/client";
import { toggleBookmarkedState } from "@ulld/utilities/toggleBookmarkState";


export const toggleBookmark = async (noteId?: number) => {
    if (!noteId) {
        // eslint-disable-next-line no-console -- Should indicate why the action can't run successfully. #MoveToLoggerPackage
        console.info(`No note id was found while toggling bookmarked state`);
        return;
    }
    const success = await client.mdx.toggleBookmarkedById.mutate(noteId);
    if (success) {
        toggleBookmarkedState();
    }
};
