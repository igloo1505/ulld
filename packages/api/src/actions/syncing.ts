import { client } from "#/trpc/client"
import { showToast } from "@ulld/state"
import store from "@ulld/state"


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
