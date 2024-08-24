"use client"
import React, { useEffect } from "react";
import { XYPlotItem } from "../types";
import { useXYPlotDispatch } from "../context";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { usePlotStorage } from "./usePlotStorage";

interface AppendPlotItemProps {
    item: XYPlotItem;
    plotId: string
}

const AppendPlotItem = (props: AppendPlotItemProps) => {
    const [data, setData] = usePlotStorage(props.plotId)
    useEffect(() => {
        if(!data){
            return
        }
        setData({
            ...data,
            plotItems: [
                ...data.plotItems,
                props.item
            ]
        })
    }, []);
    return null;
};

AppendPlotItem.displayName = "AppendPlotItem";

export default AppendPlotItem;
