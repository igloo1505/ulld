// import CoreReducer from "./slices/core";
import { initialState } from "./initialState/initialState";
import {
    AdditionalState,
    CombinedAppRootState,
    makeStore,
} from "@ulld/state/store";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

// TODO: Add reducers here. The keys of this rootReducer object must match the keys of your initialState object that is passed in to makeStore.
const rootReducer = {
    // core: CoreReducer,
};


const store = makeStore(rootReducer, initialState);

declare global {
    interface Window {
        ulldStore: ToolkitStore;
    }
}

// NOTE: This is **required**. Removing this or setting it to a different key will likely break your app.
if (typeof window !== "undefined") {
    window.ulldStore = store;
}

export default store;

// export type RootState = CombinedAppRootState<
//     keyof typeof rootReducer,
//     typeof initialState
// >;
