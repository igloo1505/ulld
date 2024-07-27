import React, { ComponentProps } from "react";
import { BarChart, Bar } from "recharts";
import {
    ChartTooltip,
    ChartTooltipContent,
} from "../../../../lib/shad/shadChart";
import { BarTraceManager } from "../../../../classes/twoD/plotSpecific/bar";

export interface BarTraceProps extends ComponentProps<typeof BarChart> {
    traces: BarTraceManager[];
}

const BarTrace = (props: BarTraceProps) => {
    return (
        <BarChart {...props}>
            {props.traces.map((t, i) => {
                let itemProps = t.getProps();
                return <Bar key={typeof itemProps.dataKey === "string" ? itemProps.dataKey : `bar-p-${i}`} {...itemProps} />;
            })}
            <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
    );
};

BarTrace.displayName = "BarTrace";

export default BarTrace;
