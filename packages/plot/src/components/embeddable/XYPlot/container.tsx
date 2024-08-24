"use client";
import React, { useMemo } from "react";
import { ParsedXYPlotProps } from "./utils/schemas";
import { useXYPlotContext } from "./context";
import { ChartContainer } from "../../../lib/shad/shadChart";
import {
    getChartConfigFromState,
    getChartDataFromState,
} from "./utils/chartConfigFromState";
import { ChartChildren, XYPlotItem } from "./types";
import XYPlotTrace from "./trace";
import { ComposedChart } from "recharts";
import { usePlotStorage } from "./utils/usePlotStorage";
import AuxillaryChartComponents from "./auxillaryChartComponents";
import { LineChart } from "recharts";

const XYPlotContainer = ({
    children,
    ...props
}: ParsedXYPlotProps & {
    children: ChartChildren;
}) => {
    const state = useXYPlotContext();
    const [storedState] = usePlotStorage(state.plotId);
    const chartConfig = useMemo(
        () => getChartConfigFromState(storedState),
        [storedState],
    );
    const chartData = useMemo(
        () => getChartDataFromState(storedState),
        [storedState],
    );
    if (!storedState || !chartConfig || !chartData) {
        return null;
    }
    console.log("storedState: ", storedState.plotItems);
    return (
        <ChartContainer
            config={chartConfig}
            style={{
                height: props.height,
                minHeight: props.minHeight,
                width: "100%",
            }}
        >
            <>{children as any}</>
            {Boolean(storedState && storedState.plotItems) && (
                <LineChart
                    data={chartData}
                    className={"w-full"}
                    accessibilityLayer
                    style={{
                        height: props.height,
                        minHeight: props.minHeight,
                        width: "100%",
                    }}
                    width={800}
                    height={400}
                    key={"someRandomKey"}
                    {...{
                        title: storedState.title || "Test Title",
                    }}
                >
                    {storedState.plotItems.map((x, i) => {
                        console.log("x: ", x);
                        return (
                            <XYPlotTrace
                                key={`plot-trace-${x.traceType}-${x.id || x.label}`}
                                index={i}
                                {...(x as XYPlotItem)}
                            />
                        );
                    })}
                    <AuxillaryChartComponents data={props} />
                </LineChart>
            )}
        </ChartContainer>
    );
};

XYPlotContainer.displayName = "XYPlotContainer";

export default XYPlotContainer;
