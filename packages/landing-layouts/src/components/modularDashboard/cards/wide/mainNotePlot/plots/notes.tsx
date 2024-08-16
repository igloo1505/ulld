import React, { useMemo } from "react";
import BarPlot from "@ulld/plot/single/bar";
import { ChartConfig } from "@ulld/plot/types";
import { DateTime } from "@ulld/utilities/dateTime";
import { useDashboardContext } from "../../../../util/provider";
import { cn } from "@ulld/utilities/cn";
import { format24HourString } from "../../../../util/utilityFunctions";

const NotesPlot = () => {
    const { filteredNotes: notes, timePeriod } = useDashboardContext();
    const is24 = timePeriod === "24 hours";
    const chartData = useMemo(() => {
        let data: { date: string | Date; mdx: number; notebook: number }[] = [];
        let byDay = is24
            ? DateTime.groupByHour(notes, (n) => n.firstSync)
            : DateTime.groupByDay(notes, (n) => n.firstSync);
        for (const d in byDay) {
            data.push({
                date: d,
                mdx: byDay[d].filter((f) => f.type === "mdxNote").length,
                notebook: byDay[d].filter((f) => f.type === "notebook").length,
            });
        }
        return {
            chartData: data.sort(
                (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
            ),
            chartConfig: {
                notes: {
                    label: "Notes",
                    color: "hsl(var(--primary))",
                },
            } satisfies ChartConfig,
        };
    }, [notes]);

    return (
        <BarPlot
            chartData={chartData.chartData}
            chartConfig={chartData.chartConfig}
            className={"w-full h-full"}
            /* yAxis={{ */
            /*     allowDecimals: false */
            /* }} */
            tooltipFormatter={(...data) => {
                let idx = data[3];
                if ("date" in data[4]) {
                    return (
                        <>
                            {idx === 0 && (
                                <div className={"border-b"}>
                                    {is24
                                        ? `${format24HourString(data[4].date as string)}`
                                        : DateTime.formatDate(data[4].date as string)}
                                </div>
                            )}
                            <div
                                className={"w-full flex flex-row justify-between items-start"}
                            >
                                <div
                                    className={"flex flex-row justify-start items-start gap-2"}
                                >
                                    {/* <div */}
                                    {/*     className={cn( */}
                                    {/*         "w-2 h-4 rounded-lg", */}
                                    {/*         data[1] === "mdx" */}
                                    {/*             ? "bg-[hsl(var(--chart-1))]" */}
                                    {/*             : "bg-[hsl(var(--chart-2))]", */}
                                    {/*     )} */}
                                    {/* /> */}
                                    <div>{data[1] === "mdx" ? "Mdx" : "Notebooks"}</div>
                                </div>
                                <div className={"ml-auto"}>
                                    {data[4][data[1] as any] as string}
                                </div>
                            </div>
                        </>
                    );
                }
                return null;
            }}
            bars={[
                {
                    dataKey: "mdx",
                    fill: "hsl(var(--primary))",
                    stackId: "a",
                    foreground: "hsl(var(--primary))",
                    label: false,
                    radius: 4
                },
                {
                    dataKey: "notebook",
                    fill: "hsl(var(--primary)/0.5)",
                    foreground: "hsl(var(--primary)/0.5)",
                    stackId: "a",
                    label: false,
                    radius: 4
                },
            ]}
        />
    );
};

NotesPlot.displayName = "NotesPlot";

export default NotesPlot;
