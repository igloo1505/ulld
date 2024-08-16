"use client";
import React, { ComponentProps } from "react";
import {
    Bar,
    BarChart,
    BarProps as BP,
    CartesianGrid,
    LabelList,
    XAxis,
    YAxis,
} from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../../lib/shad/shadChart";
import { ChartConfig } from "../../../../types";
import { LabelPosition } from "recharts/types/component/Label";
import { Margin } from "recharts/types/util/types";
import { Formatter } from "recharts/types/component/DefaultTooltipContent";

interface BarProps<T extends object> extends Omit<BP, "dataKey" | "ref"> {
    dataKey: keyof T;
    fill?: string;
    foreground?: string;
    labelPosition?: LabelPosition;
    radius?: number;
    label?: boolean;
}

export interface BarPlotProps<T extends object> {
    chartData: T[];
    chartConfig: ChartConfig;
    bars: BarProps<T>[];
    margin?: Margin;
    className?: string;
    grid?: boolean
    xAxis?: ComponentProps<typeof XAxis> | keyof T | boolean;
    yAxis?: ComponentProps<typeof YAxis> | keyof T | boolean;
    tooltipFormatter?: Formatter<any, any>;
}

const BarPlot = <T extends object>({
    chartData,
    chartConfig,
    bars,
    xAxis,
    yAxis,
    margin,
    className,
    grid = false,
    tooltipFormatter,
}: BarPlotProps<T>) => {
    return (
        <ChartContainer config={chartConfig} className={className}>
            <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                    top: 20,
                    ...margin,
                }}
            >
                {grid && <CartesianGrid vertical={false} />}
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
                {bars.map((b) => {
                    const { labelPosition, foreground } = b;
                    return (
                        <Bar
                            key={`bar-plot-${b.dataKey as string}`}
                            fill={b.fill}
                            radius={b.radius || 8}
                            {...b}
                            dataKey={b.dataKey as string}
                        >
                            {b.label !== false && (
                                <LabelList
                                    position={labelPosition || "top"}
                                    offset={12}
                                    className={foreground || "fill-foreground"}
                                    fontSize={12}
                                />
                            )}
                        </Bar>
                    );
                })}
            </BarChart>
        </ChartContainer>
    );
};

export default BarPlot;
