"use client";
import React, { useEffect, useState } from "react";
import {
    Excalidraw,
    convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
/* import "@excalidraw/excalidraw/index.css"; */
import type {
    AppState,
    BinaryFiles,
    ExcalidrawImperativeAPI,
    ExcalidrawInitialDataState,
    ExcalidrawProps,
    LibraryItems,
} from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
/* import { restore } from "@excalidraw/excalidraw"; */

export type InitialWhiteboardData = ExcalidrawInitialDataState;

export interface WhiteboardProps {
    id: string;
    initialData?: InitialWhiteboardData;
}

import { connect } from "react-redux";
import { RootState } from "@ulld/state/store";

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkmode,
    props: props,
}));

export const WhiteboardInternal = connector(
    ({ id, darkMode, initialData, handleChange, excalidrawAPI, setExcalidrawAPI, setLibraryItems, libraryItems }: WhiteboardProps & {
        darkMode: boolean, libraryItems: LibraryItems, setLibraryItems: (l: LibraryItems) => void, excalidrawAPI: ExcalidrawImperativeAPI, setExcalidrawAPI: (i: ExcalidrawImperativeAPI) => void, handleChange: (
            elements: readonly ExcalidrawElement[],
            appState: AppState,
            files: BinaryFiles,
            libraryItems: LibraryItems
        ) => void
    }) => {

        /* useEffect(() => { */
        /*    excalidrawAPI */
        /* }, [initialData]) */

        return (
            <Excalidraw
                excalidrawAPI={(api) => setExcalidrawAPI(api)}
                onChange={(...p) => handleChange(...p, libraryItems)}
                theme={darkMode ? "dark" : "light"}
                onLibraryChange={setLibraryItems}
                initialData={
                    initialData ? { 
                        ...initialData,
                        scrollToContent: true,
                    } : undefined
                }
            />
        );
    },
);

WhiteboardInternal.displayName = "WhiteboardInternal";
