import React from "react";
import { XYPlotItem } from "./types";
import LineTraceInternal from "./internalTraces/line";
import BarTraceInternal from "./internalTraces/bar";

interface XYPlotTraceProps { 
    index: number
}

const XYPlotTrace = (props: XYPlotTraceProps & XYPlotItem) => {
    console.log("trace props: ", props)

    if (props.traceType === "line") {
        return <LineTraceInternal {...props} />;
    } else {
        return <BarTraceInternal {...props} />;
    }
};

XYPlotTrace.displayName = "XYPlotTrace";

export default XYPlotTrace;
