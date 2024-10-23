export interface GlobalEventData {
    bookmarkStateChange: {
        /** Note id. */
        id: number
        /** New bookmarked state */
        bookmarked: boolean
    }
}

export type GlobalEventId = keyof GlobalEventData

export type GlobalEventMap = {[K in GlobalEventId]: CustomEvent<GlobalEventData[K]>}

declare global {
    interface WindowEventMap extends GlobalEventMap {
    }
}

