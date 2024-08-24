import React from 'react'
import { BarTraceFormattedProps, XYPlotItem } from "../types";
import { Line } from "recharts";
import { StoredBarPlot } from '../utils/schemas';


interface BarTraceInternalProps extends StoredBarPlot {
   index: number
}

const BarTraceInternal = (props: BarTraceInternalProps) => {
return (
    <div></div>
)
}


BarTraceInternal.displayName = "BarTraceInternal"


export default BarTraceInternal;
