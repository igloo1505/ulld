"use client";
import React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../../../lib/shad/shadChart";
import cn from "@ulld/utilities/cn";
import { ChartConfig } from "../../../../types";
import { useRouter } from "next/navigation";

export interface DonutChartProps {
    chartConfig: ChartConfig;
    chartData: Record<string, any>[];
    dataKey: string;
    nameKey: string;
    className?: string;
    total: number | string;
    totalLabel: React.ReactNode;
    externalLabel?: boolean | React.FC;
}

export const DonutChart = ({
    chartConfig,
    chartData,
    nameKey,
    dataKey,
    className,
    total,
    totalLabel,
    externalLabel,
}: DonutChartProps) => {
    const router = useRouter();
    const handleClick = (href?: string) => {
        if (!href) {
            return;
        }
        router.push(href);
    };

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
                    {chartData.map((x, i) => {
                        return (
                            <Cell
                                key={`donut-cell-${i}`}
                                className={x.href ? "cursor-pointer" : undefined}
                                onClick={() => handleClick(x.href)}
                            />
                        );
                    })}
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
