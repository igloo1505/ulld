"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { ExtraInitialState, ExtraReducers, makeStore } from "../state/store";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

interface Props<T extends string> {
    children: ReactNode;
    extraInitialState?: ExtraInitialState<T>;
    extraReducers?: ExtraReducers<T>;
    store?: ToolkitStore;
    findOverride?: boolean;
}

export const ReduxProvider = <T extends string>({
    children,
    extraReducers,
    extraInitialState,
    store: overrideStore,
    findOverride,
}: Props<T>) => {
    let store = overrideStore
        ? overrideStore
        : findOverride && typeof window?.ulldStore !== "undefined"
            ? window.ulldStore
            : makeStore(extraReducers, extraInitialState);
    if (typeof window !== "undefined") {
        if (process.env.NODE_ENV !== "production") {
            window.store = store;
        }
    }
    return <Provider store={store}>{children}</Provider>;
};
