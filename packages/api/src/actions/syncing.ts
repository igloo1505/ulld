import {store} from "@ulld/state/store"
import {showToast} from "@ulld/state/slice/ui"
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
