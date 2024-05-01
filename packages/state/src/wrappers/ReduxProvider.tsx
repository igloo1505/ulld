"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { ExtraInitialState, ExtraReducers, makeStore } from "../state/store";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

interface Props<T extends string> {
    children: ReactNode;
    extraInitialState?: ExtraInitialState<T>;
    extraReducers?: ExtraReducers<T>;
    store?: ToolkitStore
}

export const ReduxProvider = <T extends string>({
    children,
    extraReducers,
    extraInitialState,
    store: overrideStore,
}: Props<T>) => {
    const store = overrideStore ? overrideStore : makeStore(extraReducers, extraInitialState);
    if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
        window.store = store;
    }
    return <Provider store={store}>{children}</Provider>;
};
