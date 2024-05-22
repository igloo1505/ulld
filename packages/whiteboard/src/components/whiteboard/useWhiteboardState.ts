import {
    ExcalidrawInitialDataState,
    ExcalidrawProps,
} from "@excalidraw/excalidraw/types/types";
import { useClientDarkMode } from "@ulld/hooks/useClientDarkMode";
import { useEffect, useState } from "react";

export type WhiteboardLayout = "full-width" | "full" | "sidebar";

export type WhiteboardStateConfig = {
    isLocal?: boolean;
    lock?: boolean;
    url?: string;
    id?: string;
    fullWidth?: boolean;
    full?: boolean;
    sidebar?: boolean;
    layout?: WhiteboardLayout;
    zen?: boolean;
    dark?: boolean;
    grid?: boolean;
    viewMode?: boolean;
    data?: ExcalidrawInitialDataState;
    noCache?: boolean
};

export type WhiteboardState = {
    darkMode: boolean;
    id?: string;
    initialData?: ExcalidrawInitialDataState | null;
    layout: WhiteboardLayout;
} & ExcalidrawProps;

const getLayout = ({
    fullWidth,
    sidebar,
    full,
    layout,
}: Pick<
    WhiteboardStateConfig,
    "sidebar" | "fullWidth" | "full" | "layout"
>): WhiteboardLayout => {
    return fullWidth
        ? ("full-width" as "full-width")
        : full
            ? ("full" as "full")
            : sidebar
                ? ("sidebar" as "sidebar")
                : layout || ("full-width" as "full-width");
};

export const useWhiteboardState = ({
    url,
    id,
    lock,
    isLocal,
    dark,
    grid,
    zen,
    viewMode,
    data: _data,
    noCache,
    ...props
}: WhiteboardStateConfig) => {
    const [state, setState] = useState<WhiteboardState>({
        darkMode: typeof dark === "boolean" ? dark : true,
        layout: getLayout(props),
        viewModeEnabled: lock || viewMode,
        gridModeEnabled: grid,
    });
    const [data, setData] = useState<ExcalidrawInitialDataState | null>(null);
    const [isReady, setIsReady] = useState(Boolean(url ? Boolean(data) : true));
    const darkMode = useClientDarkMode();

    const getData = async () => {
        if (_data) {
            setData(_data);
            setIsReady(true);
        } else if (url) {
            let fetchRes = await fetch(url, {
                method: "GET",
                mode: "same-origin",
                ...(noCache && {cache: "no-cache"})
                /* cache: "force-cache", */
            });
            if (fetchRes) {
                const body = (await fetchRes.json()) as ExcalidrawInitialDataState;
                console.log("grid: ", grid)
                setData({
                    ...body,
                    appState: {
                        ...body?.appState,
                        viewModeEnabled:
                            typeof viewMode === "boolean" ? viewMode : typeof lock === "boolean" ? lock : body?.appState?.viewModeEnabled,
                        gridSize: typeof grid === "boolean" ? grid ? 20 : null : body?.appState?.gridSize || null,
                    },
                });
                setIsReady(true);
            }
        }
    };

    useEffect(() => {
        getData();
    }, [_data, url]);

    const getState = async (isDark: boolean) => {
        if (url) {
            setState({
                ...state,
                darkMode: isDark,
                id,
                zenModeEnabled: zen,
                initialData: data,
            });
        }
    };

    useEffect(() => {
        getState(darkMode);
    }, [darkMode]);

    return [state, data, isReady] as [
        WhiteboardState,
        ExcalidrawInitialDataState,
        boolean,
    ];
};
