import store from "../store";
import { setLandingSectionState } from "../slices/core";


export const setLandingSection = (newSection: string) => {
    window.history.replaceState(null, "", `?section=${newSection}`);
    store.dispatch(setLandingSectionState(newSection))
};
