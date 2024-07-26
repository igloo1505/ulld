import React from "react";
import { XYPlotProps } from "./types";
import { BarChart, Bar } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../lib/shad/shadChart";
import { getShadChartXYConfig } from "../../../lib/shad/getShadChartXYConfig";


const XYPlot = (props: XYPlotProps) => {
    let config = getShadChartXYConfig(props);
    return (
        <ChartContainer
            config={config}
            className={"w-full"}
            style={{
                minHeight:
                    typeof props.minHeight === "number"
                        ? `${props.minHeight}px`
                        : props.minHeight,
            }}
        >
            <BarChart data={data}>
                <Bar dataKey="value" />
                <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
        </ChartContainer>
    );
};

XYPlot.displayName = "XYPlot";

export default XYPlot;
