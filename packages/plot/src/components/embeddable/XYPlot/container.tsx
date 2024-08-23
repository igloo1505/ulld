"use client";
import React, { useMemo } from "react";
import { ParsedXYPlotProps } from "./utils/schemas";
import { useXYPlotContext } from "./context";
import { ChartContainer } from "../../../lib/shad/shadChart";
import { getChartConfigFromState } from "./utils/chartConfigFromState";
import { ChartChildren } from "./types";
import XYPlotTrace from "./trace";

const XYPlotContainer = ({
    children,
    ...props
}: ParsedXYPlotProps & {
    children: ChartChildren;
}) => {
    const state = useXYPlotContext();
    const chartConfig = useMemo(() => getChartConfigFromState(state), [state]);
    return <ChartContainer config={chartConfig}>
        <>
        {children}
        </>
        {state.plotItems.map((x) => <XYPlotTrace 
                key={x.dataKey}
                {...x}
            />)}
     </ChartContainer>;
};

XYPlotContainer.displayName = "XYPlotContainer";

export default XYPlotContainer;
