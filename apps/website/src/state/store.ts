import CoreReducer from "./slices/core";
import InteractionsReducer from "./slices/interactions";
import { initialState } from "./initialState/initialState";
import { AdditionalState, CombinedAppRootState, makeStore } from "@ulld/state/store";


const rootReducer = {
    core: CoreReducer,
    interactions: InteractionsReducer
};


export const additionalState: AdditionalState<keyof typeof rootReducer> = {
    extraInitialState: initialState,
    extraReducers: rootReducer,
};


const store = makeStore(rootReducer, initialState)


export default store

export type RootState = CombinedAppRootState<keyof typeof rootReducer, typeof initialState>
