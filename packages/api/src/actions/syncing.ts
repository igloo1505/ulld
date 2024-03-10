import { showToast, store } from "@ulld/state"
import { client } from "../trpc"


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
