import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CoreReducer from "./slices/core";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist"
import { initialState } from "./initialState/initialState";
import storage from 'redux-persist-indexeddb-storage';


const rootReducer = {
    core: CoreReducer,
    // settings: SettingsReducer,
    // functionality: FunctionalityReducer,
    // config: ConfigReducer
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
        const persistConfig = {
            key: "root",
            whitelist: ["auth"],
            storage: storage("Ulld-website")
        };
        const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));
        let store: any = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== "production",
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }),
        });
        store.__persistor = persistStore(store);
        return store;
    }
};


const store = makeStore()

// declare global {
//     interface Window {
//         store: typeof store;
//     }
// }

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    /* @ts-ignore */
    window.store = store;
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
