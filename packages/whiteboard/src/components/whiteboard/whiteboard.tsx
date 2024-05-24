"use client";
import { cn } from "@ulld/utilities/cn";
import type { InitialWhiteboardData, WhiteboardProps } from "./wrapper";
import dynamic from "next/dynamic";
import "../../styles/whiteboard/styles.scss";
import { useState, type CSSProperties, useRef } from "react";
import {
    AppState,
    BinaryFiles,
    ExcalidrawImperativeAPI,
    LibraryItems,
} from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { client } from "@ulld/api/client";
import { jsonStringifyWhiteboard } from "../../lib/formatReturnedState";
import { WhiteboardLayout } from "./useWhiteboardState";

const WhiteboardInternal = dynamic(
    () => import("./wrapper").then((a) => a.WhiteboardInternal),
    {
        ssr: false,
    },
);


export type WhiteboardRootProps = WhiteboardProps & {
    layout?: WhiteboardLayout;
    className?: string;
    style?: CSSProperties;
    isLocal?: boolean;
    debounce?: number;
    viewMode?: boolean
};

export const WBoard = ({
    layout,
    style,
    className,
    isLocal,
    debounce = 5000,
    ...props
}: WhiteboardRootProps) => {
    const [libraryItems, setLibraryItems] = useState<LibraryItems>([]);
    const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI>(
        null!,
    );
    const timer = useRef<NodeJS.Timeout | null>(null);

    const handleChange = (
        elements: readonly ExcalidrawElement[],
        appState: AppState,
        files: BinaryFiles,
    ) => {
        if (
            elements.length === 0 &&
            Object.keys(files).length === 0 &&
            libraryItems.length === 0
        )
            return;
        const data: InitialWhiteboardData & { libraryItems: LibraryItems } = {
            elements: elements,
            appState: appState,
            files: files,
            libraryItems: libraryItems,
        };
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (!isLocal && typeof props.id === "string") {
            timer.current = setTimeout(async () => {
                console.log("Saving whiteboard data: ", data);
                await client.whiteboard.save.mutate({
                    id: props.id as string,
                    data: jsonStringifyWhiteboard(data),
                });
            }, debounce);
        }
    };

    const _props = {
        ...props,
        excalidrawAPI,
        setExcalidrawAPI,
        libraryItems,
        setLibraryItems,
        handleChange,
    };


    if (layout === "full") {
        return (
            <div
                className={cn("w-full p-4 h-[calc(100vh-8rem)] block", className)}
                style={style}
            >
                <WhiteboardInternal {..._props} />
            </div>
        );
    }
    if (layout === "full-width") {
        return (
            <div
                className={cn("w-full p-4 h-[min(80vh,500px)] inline-block", className)}
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
                    "w-full p-4 lg:w-[33%] lg:float-right lg:m-4 h-[min(80vh,500px)] inline-block",
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
