import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UIReducer from "./slices/ui";
import SettingsReducer from "./slices/settings";
import FunctionalityReducer from "./slices/functionality";
import ConfigReducer from "./slices/config";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist"
import initialState from "./initialState/initialState";
import storage from 'redux-persist-indexeddb-storage';


const rootReducer = {
    UI: UIReducer,
    settings: SettingsReducer,
    functionality: FunctionalityReducer,
    config: ConfigReducer
}


const devTools = () => {
    const defval = process.env.NODE_ENV !== "production"
    if (typeof window === "undefined") {
        return defval
    }
    const forceTools = window.localStorage.getItem("devtools")
    return typeof forceTools === "undefined" ? defval : forceTools === "true"
}


const makeConfiguredStore = () => configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: devTools()
});


export const makeStore = (): ReturnType<typeof makeConfiguredStore> => {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return makeConfiguredStore();
    } else {
        // we need it only on client side
        const persistConfig = {
            key: "root",
            whitelist: ["auth"], // make sure it does not clash with server keys
            storage: storage("Ulld")
        };
        const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));
        let store: any = configureStore({
            reducer: persistedReducer,
            // devTools: process.env.NODE_ENV !== "production",
            devTools: true,
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }),
        });
        store.__persistor = persistStore(store); // Nasty hack
        return store;
    }
};


const _store = makeStore()

declare global {
    interface Window {
        store: typeof _store;
        MonacoEnvironment: any
    }
}

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    window.store = _store;
}


export type RootState = ReturnType<typeof _store.getState>;
export type AppDispatch = typeof _store.dispatch;

export const store = _store
