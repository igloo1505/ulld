import { useEffect, useState } from "react";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { StoredPlotData } from "../types";
import { usePathname } from "next/navigation";

interface StoredPlotDataSchema {
    pathName: string
    data: {
        [plotId: string]: StoredPlotData
    }
}

const plotStorageKey = "ulld-plot-data"



export const usePlotStorage = (
    plotId: string,
    initialData?: StoredPlotData,
) => {
    const pathName = usePathname();

    const [_data, _setData] =
        useLocalStorage<StoredPlotDataSchema>(
            plotStorageKey,
        );

    const [plotData, setPlotData] = useState(_data ? _data.data[plotId] : undefined)

    useEffect(() => {
        setPlotData(_data ? _data.data[plotId] : undefined)
    }, [_data])

    useEffect(() => {
        if (initialData) {
            if (pathName === _data?.pathName) {
                _setData({
                    ..._data,
                    data: {
                        ..._data.data,
                        [plotId]: initialData
                    }
                });
            } else {
                _setData({
                    pathName: pathName,
                    data: {
                        [plotId]: {
                            ...initialData,
                        },
                    }
                });
            }
        }
    }, []);

    useEffect(() => {
        if (pathName && _data?.pathName && (pathName !== _data?.pathName)){
            window.localStorage.removeItem(plotStorageKey)
        }
        return () => {
            window.localStorage.removeItem(plotStorageKey)
        }
    }, [pathName]);

    const setData = (newData: StoredPlotData) => {
        _setData({
            ..._data,
            data: {
                [plotId]: {
                    ...newData,
                },
            }
        });
    };

    return [plotData, setData] as [
        StoredPlotData | undefined,
        (newData: StoredPlotData) => void,
    ];
};
