import { ExcalidrawInitialDataState, ExcalidrawProps } from "@excalidraw/excalidraw/types/types";
import { useClientDarkMode } from "@ulld/hooks/useClientDarkMode";
import { useEffect, useState } from "react";


export type WhiteboardLayout = "full-width" | "full" | "sidebar";


export type WhiteboardStateConfig = {
    isLocal?: boolean;
    lock?: boolean;
    url?: string;
    id?: string;
    fullWidth?: boolean
    full?: boolean
    sidebar?: boolean
    layout?: WhiteboardLayout
    zen?: boolean
    dark?: boolean
    grid?: boolean
};

export type WhiteboardState = {
    darkMode: boolean;
    id?: string
    initialData?: ExcalidrawInitialDataState | null
    layout: WhiteboardLayout
} & ExcalidrawProps



const getLayout = ({fullWidth, sidebar, full, layout}: Pick<WhiteboardStateConfig, "sidebar" | "fullWidth" | "full" | "layout">): WhiteboardLayout => {
        return fullWidth ? "full-width" as "full-width" : full ? "full" as "full" : sidebar ? "sidebar" as "sidebar" : layout || "full-width" as "full-width"
    }

export const useWhiteboardState = ({
    url,
    id,
    lock,
    isLocal,
    dark,
    grid,
    zen,
    ...props
}: WhiteboardStateConfig) => {
    const [state, setState] = useState<WhiteboardState>({
        darkMode: typeof dark === "boolean" ? dark : true,
        layout: getLayout(props),
        viewModeEnabled: lock,
         gridModeEnabled: grid
    });
    const darkMode = useClientDarkMode();

    const getData = async () => {
        if (url) {
            let fetchRes = await fetch(url, {
                method: "GET",
                mode: "same-origin",
                cache: "force-cache",
            });
            if (fetchRes) {
                const body = await fetchRes.json();
                return body
            }
            return
        }
    };

    const getState = async (isDark: boolean) => {
        if (url) {
            let data = await getData()
            setState({
                ...state,
                darkMode: isDark,
                id,
                zenModeEnabled: zen,
                initialData: data,
            })
        }
    };

    useEffect(() => {
        getState(darkMode);
    }, [darkMode]);

    return state
};
