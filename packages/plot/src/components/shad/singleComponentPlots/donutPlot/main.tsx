"use client";

import * as React from "react";
/* import { TrendingUp } from "lucide-react"; */
import { Label, Pie, PieChart } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../../lib/shad/shadChart";
import cn from "@ulld/utilities/cn";

export interface DonutChartProps {
    chartConfig: ChartConfig;
    chartData: Record<string, any>[];
    dataKey: string;
    nameKey: string;
    className?: string;
    total: number | string
    totalLabel: React.ReactNode
    externalLabel?: boolean | React.FC
}

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export const DonutChart = ({
    chartConfig,
    chartData,
    nameKey,
    dataKey,
    className,
    total,
    totalLabel,
    externalLabel
}: DonutChartProps) => {
    /* const totalVisitors = React.useMemo(() => { */
    /*     return chartData.reduce((acc, curr) => acc + curr.visitors, 0); */
    /* }, []); */

    return (
        <ChartContainer
            config={chartConfig}
            className={cn("mx-auto aspect-square max-h-[250px]", className)}
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey={dataKey}
                    nameKey={nameKey}
                    innerRadius={60}
                    strokeWidth={5}
                    label={externalLabel}
                >
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-3xl font-bold"
                                        >
                                            {total}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            {totalLabel}
                                        </tspan>
                                    </text>
                                );
                            }
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    );
};
