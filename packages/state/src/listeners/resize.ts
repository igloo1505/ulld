import { store } from "../state/store"
import { NavType } from "../state/initialState/ui"
import { setNavtype } from "../state/slices/ui"


export const resize = (bpFromConfig?: number | null) => {
    if (!bpFromConfig) {
        console.warn("No navbar breakpoint found in the ULLD config. Using default of 768px.")
    }
    let vw = window.innerWidth
    const bp = bpFromConfig || 768
    let navtype: NavType = vw < bp ? "drawer" : "top"
    store.dispatch(setNavtype(navtype))
}
