"use client";

import { TrendingUp } from "lucide-react";
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
import { ComponentProps } from "react";
/* const chartData = [ */
/*   { month: "January", desktop: 186 }, */
/*   { month: "February", desktop: 305 }, */
/*   { month: "March", desktop: 237 }, */
/*   { month: "April", desktop: 73 }, */
/*   { month: "May", desktop: 209 }, */
/*   { month: "June", desktop: 214 }, */
/* ] */

/* const chartConfig = { */
/*   desktop: { */
/*     label: "Desktop", */
/*     color: "hsl(var(--chart-1))", */
/*   }, */
/* } satisfies ChartConfig */

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
    xAxis?: keyof T;
    margin?: Margin;
    className?: string;
    yAxis?: ComponentProps<typeof YAxis> | string | boolean;
    tooltipFormatter?: Formatter<any, any>;
}

export const BarPlot = <T extends object>({
    chartData,
    chartConfig,
    bars,
    xAxis,
    yAxis,
    margin,
    className,
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
                <CartesianGrid vertical={false} />
                {xAxis && (
                    <XAxis
                        dataKey={xAxis as string}
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
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
