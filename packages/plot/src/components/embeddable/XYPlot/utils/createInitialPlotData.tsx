"use client";
import React, { useEffect } from "react";
import { StoredPlotData } from "../types";
import { usePlotStorage } from "./usePlotStorage";

interface CreateInitialPlotDataProps {
    data: StoredPlotData;
}

const CreateInitialPlotData = ({ data }: CreateInitialPlotDataProps) => {
    const [storedData, setStoredData] = usePlotStorage(data.plotId, data);

    useEffect(() => {
        setStoredData(data)
    }, [data])

    return null;
};

CreateInitialPlotData.displayName = "CreateInitialPlotData";

export default CreateInitialPlotData;
