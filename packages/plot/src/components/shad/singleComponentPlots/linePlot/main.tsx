"use client";
import React, { ComponentPropsWithoutRef } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../../lib/shad/shadChart";
import { ChartConfig } from "../../../../types";
import { Margin } from "recharts/types/util/types";
import { Formatter } from "recharts/types/component/DefaultTooltipContent";
import { type XYAxisProps } from "../utilityComponents/xyAxis";

export interface LintPlotProps<T extends object>
    extends Omit<ComponentPropsWithoutRef<typeof LineChart>, "margin">,
    XYAxisProps<T> {
    chartConfig: ChartConfig;
    chartData: T[];
    margin?: Margin;
    grid?: boolean
    tooltipFormatter?: Formatter<any, any>;
    lines: (Omit<ComponentPropsWithoutRef<typeof Line>, "dataKey"> & {
        dataKey: keyof T;
    })[];
    container: Omit<
        ComponentPropsWithoutRef<typeof ChartContainer>,
        "config" | "children"
    >;
}

const LinePlot = <T extends object>({
    chartConfig,
    lines,
    tooltipFormatter,
    chartData,
    xAxis,
    yAxis,
    margin,
    container,
    grid = false,
    ...props
}: LintPlotProps<T>) => {
    return (
        <ChartContainer {...container} config={chartConfig}>
            <LineChart
                {...props}
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                    ...margin,
                }}
            >
                {grid && <CartesianGrid 
                    vertical={false}
                />}
                {xAxis && (
                    <XAxis
                        dataKey={typeof xAxis === "string" ? xAxis : undefined}
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        {...(typeof xAxis === "object" ? xAxis : {})}
                    /* tickFormatter={(value) => value?.slice(0, 3)} */
                    />
                )}
                {yAxis && (
                    <YAxis
                        dataKey={typeof yAxis === "string" ? yAxis : undefined}
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        {...(typeof yAxis === "object" ? yAxis : {})}
                    /* tickFormatter={(value) => value?.slice(0, 3)} */
                    />
                )}
                <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent hideLabel formatter={tooltipFormatter} />
                    }
                />
                {lines.map(({ dataKey, ...x }) => {
                    return (
                        <Line
                            key={dataKey as string}
                            dataKey={dataKey as string}
                            type="natural"
                            stroke="var(--chart-1)"
                            strokeWidth={2}
                            dot={false}
                            {...x}
                        />
                    );
                })}
            </LineChart>
        </ChartContainer>
    );
};


export default LinePlot
