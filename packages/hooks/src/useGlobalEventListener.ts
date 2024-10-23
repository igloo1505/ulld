import type { GlobalEventData, GlobalEventId } from "@ulld/types"
import { useState } from "react"
import { useEventListener } from "./useEventListener"

export interface UseGlobalEventListenerProps<T extends GlobalEventId> {
    event: T
    onChange?: (data: GlobalEventData[T]) => void
}


export const useGlobalEventListener = <T extends GlobalEventId>({event, onChange}: UseGlobalEventListenerProps<T>): GlobalEventData[T] | null => {
      const [data, setData] = useState<GlobalEventData[T] | null>(null)

    useEventListener(event, (e) => {
        setData(e.detail)
        if(onChange){
            onChange(e.detail)
        }
    })

    return data
}
