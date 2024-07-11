"use client";
import { RefObject, useRef } from "react";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { setFigureIndices } from "../state/slices/note";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { useUlldStore } from "@ulld/hooks/useUlldStore";

interface NoteStateObserverProps {
    containerRef?: RefObject<HTMLElement> | null;
    figureStateDebounce?: number;
}

declare global {
    interface Window {
        ulldStore: ToolkitStore;
    }
    interface WindowEventMap {
        "ulld-figure-rendered": CustomEvent;
    }
}

export const NoteStateObserver = ({
    containerRef,
    figureStateDebounce = 500,
}: NoteStateObserverProps) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const _store = useUlldStore();

    const getContainer = () => {
        return containerRef ? containerRef.current : document.body;
    };

    const getStore = () => {
        return _store || window.ulldStore;
    };

    const gatherImageIndices = () => {
        if (typeof window === "undefined") return;
        let figures = getContainer()?.querySelectorAll("img[data-ulld-figure]");
        let ids: string[] = [];
        figures?.forEach((img) => ids.push(img.id));
        let store = getStore();
        if (store) {
            store.dispatch(setFigureIndices(ids));
        }
    };

    useEventListener("ulld-figure-rendered", () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(gatherImageIndices, figureStateDebounce);
    });

    return null;
};

NoteStateObserver.displayName = "NoteStateObserver";
