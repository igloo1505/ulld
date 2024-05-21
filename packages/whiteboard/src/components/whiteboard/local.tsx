"use client";
import { WhiteboardRootProps, WBoard } from "./whiteboard";
import { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";
import { useEffect, useState } from "react";
import { WhiteboardStateConfig, useWhiteboardState } from "./useWhiteboardState";

interface Props extends Omit<WhiteboardRootProps, "initialData"> {
    data?: ExcalidrawInitialDataState;
    showIfNoData?: boolean
}

export const WhiteboardLocal = ({
    data: _data,
    url,
    showIfNoData = true,
    fullWidth,
    full,
    sidebar,
    ...props
}: Props & WhiteboardStateConfig) => {
    if (!_data && !url) return null;
    const [data, setData] = useState<ExcalidrawInitialDataState | null>(null);

    const getData = async () => {
        if (_data) {
            setData(_data);
        } else if (url) {
            console.log("url: ", url)
            let fetchRes = await fetch(url, {
                method: "GET",
                mode: "same-origin",
                cache: "force-cache",
            });
            if(fetchRes){
                const body = await fetchRes.json()
                setData(body)
            }
        }
    };

    useEffect(() => {
        getData();
    }, [_data, url]);

    const whiteboardState = useWhiteboardState(props)

    if (!data && !showIfNoData) return null;

    return (
            <WBoard 
            {...props} 
            {...whiteboardState}
            isLocal
            initialData={data}
            />
    );
};
