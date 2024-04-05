"use client"
import { cn } from "@ulld/utilities/cn";
import type { InitialWhiteboardData, WhiteboardProps } from "./wrapper";
import dynamic from "next/dynamic";
import "../../styles/whiteboard/styles.scss"
import { useState, useEffect, type CSSProperties } from "react";
import { AppState, BinaryFiles, ExcalidrawImperativeAPI, ExcalidrawProps, LibraryItems } from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { client } from "@ulld/api/client";
import { jsonStringifyWhiteboard } from "#/lib/formatReturnedState";
const WhiteboardInternal = dynamic(
    async () => (await import("./wrapper")).WhiteboardInternal,
    {
        ssr: false,
    },
);

type WhiteboardLayout = "full-width" | "full" | "sidebar";

export type WhiteboardRootProps = WhiteboardProps & {
    layout?: WhiteboardLayout;
    className?: string;
    style?: CSSProperties;
}



export const WBoard = ({
    layout,
    style,
    className,
    ...props
}: WhiteboardRootProps) => {
    const storageId = `${props.id}-whiteboard`

       console.log("props.initialData: ", props.initialData)

        const [libraryItems, setLibraryItems] = useState<LibraryItems>([])
        const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI>(
            null!,
        );

        const handleChange = (
            elements: readonly ExcalidrawElement[],
            appState: AppState,
            files: BinaryFiles,
        ) => {
            if(elements.length === 0 && Object.keys(files).length === 0 && libraryItems.length === 0) return
            const data: InitialWhiteboardData & {libraryItems: LibraryItems} = {
                elements: elements,
                appState: appState,
                files: files,
                libraryItems: libraryItems,
            };

        
            let existingTimeout = window.localStorage.getItem(storageId)
            if (existingTimeout){
                clearTimeout(existingTimeout)
            } 
            let updateFunc = setTimeout(async () => { 
                console.log("Saving whiteboard data: ", data)
                 await client.whiteboard.save.mutate({ 
                     id: props.id, 
                     data: jsonStringifyWhiteboard(data),
                 }); 
             }, 3000)
            window.localStorage.setItem(storageId, `${updateFunc}`)
        };

    const _props = {
        ...props,
        excalidrawAPI,
        setExcalidrawAPI,
        libraryItems,
        setLibraryItems,
        handleChange
    }

    useEffect(() => {
    }, [excalidrawAPI])

    if (layout === "full") {
        return (
            <div
                className={cn("w-full p-4 h-[calc(100vh-8rem)]", className)}
                style={style}
            >
                <WhiteboardInternal {..._props} />
            </div>
        );
    }
    if (layout === "full-width") {
        return (
            <div
                className={cn("w-full p-4 h-[min(80vh,500px)]", className)}
                style={style}
            >
                <WhiteboardInternal {..._props} />
            </div>
        );
    }
    if (layout === "sidebar") {
        return (
            <div
                className={cn(
                    "w-full p-4 lg:w-[33%] lg:float-right lg:m-4 h-[min(80vh,500px)]",
                    className,
                )}
                style={style}
            >
                <WhiteboardInternal {..._props} />
            </div>
        );
    }
    return (
        <div className={className} style={style}>
            <WhiteboardInternal {..._props} />
        </div>
    );
};


