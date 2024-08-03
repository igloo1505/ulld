import { LinePlot } from "@ulld/plot/single/line";
import { ChartConfig } from "@ulld/plot/types";
import { DateTime } from "@ulld/utilities/dateTime";
import React, { useMemo } from "react";
import { useDashboardContext } from "../../../../util/provider";
import notes from "./notes";
import cn from "@ulld/utilities/cn";
import { format24HourString } from "../../../../util/utilityFunctions";
import { clampInColorArray } from "../../../../util/staticData";

interface TaskListCompletionPlotProps { }

const TaskListCompletionPlot = (props: TaskListCompletionPlotProps) => {
    const { tasks, timePeriod } = useDashboardContext();

    const is24 = timePeriod === "24 hours";

    const chartData = useMemo(() => {
        let data: {
            date: string | Date;
            completedOn: number;
            createdOn: number;
        }[] = [];

        let filteredCreatedTasks = DateTime.filterByDateRange(tasks, (t) => t.createdAt, DateTime.getTimePeriod(timePeriod || "All Time"))

        let filteredCompletedTasks = DateTime.filterByDateRange(tasks.filter((x) => Boolean(x.completedOn)), (t) => t.completedOn!, DateTime.getTimePeriod(timePeriod || "All Time"))

        let byCreatedDay = DateTime.groupByDay(filteredCreatedTasks, (n) => n.createdAt);

        let byCompletionDay = DateTime.groupByDay(
            filteredCompletedTasks,
            (n) => n.completedOn,
        );
        let days = [];
        for (const k in byCreatedDay) {
            days.push(k);
        }
        for (const k in byCompletionDay) {
            if (!days.includes(k)) {
                days.push(k);
            }
        }
        for (const day of days) {
            data.push({
                date: day,
                completedOn: day in byCompletionDay ? byCompletionDay[day].length : 0,
                createdOn: day in byCreatedDay ? byCreatedDay[day].length : 0,
            });
        }
        return {
            chartData: data.sort(
                (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
            ),
            chartConfig: {
                completedOn: {
                    label: "Completed",
                    color: "hsl(var(--chart-1))",
                },
                createdOn: {
                    label: "Created",
                    color: "hsl(var(--chart-2))",
                },
            } satisfies ChartConfig,
        };
    }, [notes, timePeriod]);

    return (
        <LinePlot
            chartData={chartData.chartData}
            chartConfig={chartData.chartConfig}
            margin={{
                "top": 32,
                "bottom": 16
            }}
            container={{
                className: "w-full h-full max-h-full",
            }}
            yAxis={{
                allowDecimals: false
            }}
            tooltipFormatter={(value, valueKey, data, idx, payload) => {
                if ("date" in payload) {
                    return (
                        <>
                            {idx === 0 && (
                                <div className={"border-b"}>
                                    {is24
                                        ? `${format24HourString(payload.date as string)}`
                                        : DateTime.formatDate(payload.date as string)}
                                </div>
                            )}
                            <div
                                className={"w-full flex flex-row justify-between items-start"}
                            >
                                <div
                                    className={"flex flex-row justify-start items-start gap-2"}
                                >
                                    <div
                                        className={cn(
                                            "w-2 h-4 rounded-lg",
                                        )}
                                        style={{
                                            backgroundColor: clampInColorArray(idx)
                                        }}
                                    />
                                    <div>{valueKey === "completedOn" ? "Completed" : "Created"}</div>
                                </div>
                                <div className={"ml-auto"}>
                                    {value}
                                </div>
                            </div>
                        </>
                    );
                }
                return null;
            }}
            lines={[
                {
                    dataKey: "completedOn",
                    stroke: "hsl(var(--chart-1))",
                    label: false,
                },
                {
                    dataKey: "createdOn",
                    stroke: "hsl(var(--chart-2))",
                    label: false,
                },
            ]}
        />
    );
};

TaskListCompletionPlot.displayName = "TaskListCompletionPlot";

export default TaskListCompletionPlot;
