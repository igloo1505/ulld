"use client";
import React, { useMemo } from "react";
import { ParsedXYPlotProps } from "./utils/schemas";
import { useXYPlotContext } from "./context";
import { ChartContainer } from "../../../lib/shad/shadChart";
import { getChartConfigFromState } from "./utils/chartConfigFromState";
import { ChartChildren } from "./types";

const XYPlotContainer = ({
    children,
}: ParsedXYPlotProps & {
    children: ChartChildren;
}) => {
    const state = useXYPlotContext();
    const chartConfig = useMemo(() => getChartConfigFromState(state), [state]);
    return <ChartContainer config={chartConfig}>{children}</ChartContainer>;
};

XYPlotContainer.displayName = "XYPlotContainer";

export default XYPlotContainer;
