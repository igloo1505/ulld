import type { GlobalEventId, GlobalEventData } from "@ulld/types"

export const broadcastGlobalEvent = <T extends GlobalEventId>(id: T, props: GlobalEventData[T]): void => {
       window.dispatchEvent(new CustomEvent(id, {
        detail: props
    })) 
}
