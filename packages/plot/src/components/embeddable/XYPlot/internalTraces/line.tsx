"use client"
import React, { useMemo } from "react";
import { LineTraceFormattedProps, XYPlotItem } from "../types";
import { Line } from "recharts";
import { useXYPlotContext } from "../context";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { plotThemeData } from "../../../../colors";
import { StoredLinePlot } from "../utils/schemas";
import { getLabelFromPlotItem } from "../utils/chartConfigFromState";

interface LineTraceInternalProps extends StoredLinePlot {
    index: number
}

const LineTraceInternal = (props: LineTraceInternalProps) => {
    console.log(`Props in LineTraceInternal, ${props}`)
    const state = useXYPlotContext()
    const color = useMemo(() => {
        return props.color ? props.color : ArrayUtilities.clampInArray(plotThemeData[state.theme], props.index)
    }, [])
    const dataKey = getLabelFromPlotItem(props as StoredLinePlot)
    console.log("color: ", color)
    return (
        <Line
            dataKey={dataKey}
            type={props.type}
            stroke={color}
            strokeWidth={props.thickness}
            dot={
                typeof props.dot === "number"
                    ? {
                        r: props.dot,
                    }
                    : props.dot
            }
        />
    );
};

LineTraceInternal.displayName = "LineTraceInternal";

export default LineTraceInternal;
