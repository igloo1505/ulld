import React from "react";
import { LineTraceFormattedProps, XYPlotItem } from "../types";
import { Line } from "recharts";

interface LineTraceInternalProps extends LineTraceFormattedProps { }

const LineTraceInternal = (props: LineTraceInternalProps) => {
    return (
        <Line
            dataKey={props.dataKey}
            type={props.type}
            stroke={props.color}
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
