import React from "react";
import { XYPlotProps } from "./types";
import {
    ChartContainer,
} from "../../../lib/shad/shadChart";
import { XYDataHandler } from "../../../classes/twoD/XYDataHandler";
import BarTrace from "./traces/barTrace";


const XYPlot = (props: XYPlotProps) => {
    let data = new XYDataHandler(props)
    return (
        <ChartContainer
            config={data.chartConfig.data}
            className={"w-full"}
            style={{
                minHeight:
                    typeof props.minHeight === "number"
                        ? `${props.minHeight}px`
                        : props.minHeight,
            }}
        >
            <BarTrace 
               data={data.flattenedData}
            />
        </ChartContainer>
    );
};

XYPlot.displayName = "XYPlot";

export default XYPlot;
