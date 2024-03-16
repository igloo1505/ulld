import {store} from "@ulld/state/src/state/store"
import {showToast} from "@ulld/state/src/state/slices/ui"
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
