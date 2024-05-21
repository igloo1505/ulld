"use client";
import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import type {
    AppState,
    BinaryFiles,
    ExcalidrawImperativeAPI,
    ExcalidrawInitialDataState,
    LibraryItems,
} from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { useClientDarkMode } from "@ulld/hooks/useClientDarkMode";
/* import { restore } from "@excalidraw/excalidraw"; */

export type InitialWhiteboardData = ExcalidrawInitialDataState;

export interface WhiteboardProps extends WhiteboardState {
}

import { connect } from "react-redux";
import { RootState } from "@ulld/state/store";
import { WhiteboardState } from "./useWhiteboardState";

const connector = connect((state: RootState, props: any) => ({
    darkMode: state.UI.darkmode,
    props: props,
}));

export const WhiteboardInternal = connector(
    ({
        id,
        darkMode: _darkMode,
        initialData,
        handleChange,
        excalidrawAPI,
        setExcalidrawAPI,
        setLibraryItems,
        libraryItems,
        ...props
    }: WhiteboardProps & {
        darkMode: boolean;
        libraryItems: LibraryItems;
        setLibraryItems: (l: LibraryItems) => void;
        excalidrawAPI: ExcalidrawImperativeAPI;
        setExcalidrawAPI: (i: ExcalidrawImperativeAPI) => void;
        handleChange: (
            elements: readonly ExcalidrawElement[],
            appState: AppState,
            files: BinaryFiles,
            libraryItems: LibraryItems,
        ) => void;
    }) => {
        const darkMode = useClientDarkMode(_darkMode);

        return (
            <Excalidraw
                {...props}
                excalidrawAPI={(api) => setExcalidrawAPI(api)}
                onChange={(...p) => handleChange(...p, libraryItems)}
                theme={darkMode ? "dark" : "light"}
                onLibraryChange={setLibraryItems}
                initialData={
                    initialData
                        ? {
                            ...initialData,
                            scrollToContent: true,
                        }
                        : undefined
                }
                UIOptions={{
                    canvasActions: {
                        changeViewBackgroundColor: false,
                        clearCanvas: false,
                        loadScene: false,
                        export: {
                            saveFileToDisk: true,
                        },
                    },
                    welcomeScreen: false
                }}
            />
        );
    },
);

WhiteboardInternal.displayName = "WhiteboardInternal";
