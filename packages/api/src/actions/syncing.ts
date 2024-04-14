import { store } from "@ulld/state/state/store"
import { showToast } from "@ulld/state/state/slices/ui"
import { client } from "../trpc/client"


export const syncRootDirectory = async () => {
    await client.sync.syncDir.mutate({
        offline: !navigator.onLine
    })

    store.dispatch(showToast({
        title: "Success",
        description: "File system was synced with database."
    }))

    return true
}
