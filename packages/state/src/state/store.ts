import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { UIReducer } from "./slices/ui";
import { SettingsReducer } from "./slices/settings";
import { FunctionalityReducer } from "./slices/functionality";
import { ConfigReducer } from "./slices/config";
import { NoteReducer } from "./slices/note";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import { initialState } from "./initialState/initialState";
// @ts-ignore
import storage from "redux-persist-indexeddb-storage";

export type ExtraReducers<T extends string> = Record<T, Reducer>;
export type ExtraInitialState<T extends string> = Record<T, object>

export type AdditionalState<T extends string> = {
    extraReducers: ExtraReducers<T>,
    extraInitialState: ExtraInitialState<T>
}

const rootReducer = <T extends string>(extraReducers?: ExtraReducers<T>) => {
    return {
        UI: UIReducer,
        settings: SettingsReducer,
        functionality: FunctionalityReducer,
        config: ConfigReducer,
        note: NoteReducer,
        ...extraReducers
    } satisfies Record<string, Reducer>
};

const devTools = () => {
    const defval = process.env.NODE_ENV !== "production";
    if (typeof window === "undefined") {
        return defval;
    }
    const forceTools = window.localStorage.getItem("devtools");
    return typeof forceTools === "undefined" ? defval : forceTools === "true";
};

const makeConfiguredStore = <T extends string>(extraReducers?: ExtraReducers<T>, extraInitialState?: ExtraInitialState<T>) =>
    configureStore({
        reducer: rootReducer<T>(extraReducers),
        preloadedState: {
            ...initialState,
            ...extraInitialState
        },
        devTools: devTools(),
    });

export const makeStore = <T extends string>(extraReducers?: ExtraReducers<T>, extraInitialState?: ExtraInitialState<T>): ReturnType<typeof makeConfiguredStore> => {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return makeConfiguredStore<T>(extraReducers, extraInitialState);
    } else {
        // we need it only on client side
        const persistConfig = {
            key: "root",
            // whitelist: ["auth"], // make sure it does not clash with server keys
            storage: storage("Ulld"),
        };
        const persistedReducer = persistReducer(
            persistConfig,
            combineReducers(rootReducer<T>(extraReducers)),
        );
        let store: any = configureStore({
            reducer: persistedReducer,
            // devTools: process.env.NODE_ENV !== "production",
            devTools: true,
            preloadedState: {
                ...initialState,
                ...extraInitialState
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }),
        });
        store.__persistor = persistStore(store); // Nasty hack
        window.store = store
        return store;
    }
};


// WARN: This might not be a good idea to create this here if an extended store will be created on top of it. Leaving this for now to handle some other things and deal with the type errors once everything is building.
const store = makeStore()

declare global {
    interface Window {
        store: ReturnType<typeof makeStore>;
    }
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"]


export type CombinedAppRootState<J extends string, T extends ExtraInitialState<J>> = RootState & T

export default store
