import { GlobalActionMap } from "../actions/clientOnly/actionMapTypes"

// TODO: Find ways to implement type saftey, making sure all of the keys in the internalGlobalActionIds type are accounted for.
export type GlobalActionBroadcasterMap = {
    bookmarkStateChange: (props: ReturnType<GlobalActionMap["toggleBookmarked"]>) => void
}

