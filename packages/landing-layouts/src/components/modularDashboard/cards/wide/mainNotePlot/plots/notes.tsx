import React, { useMemo } from "react";
import { BarPlot } from "@ulld/plot/single/bar";
import { ModularDashboardData } from "../../../../types";
import { ChartConfig } from "@ulld/plot/types";
import { DateTime } from "@ulld/utilities/dateTime";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { filterItemsByTimePeriod } from "../../../../util/utilityFunctions";
import { useDashboardContext } from "../provider";

export interface NotesPlotProps {
    /* notes: ModularDashboardData["lastAccessNotes"]; */
}

const NotesPlot = ({ }: NotesPlotProps) => {
    const {filteredNotes: notes} = useDashboardContext()
    console.log("notes: ", notes)
    const chartData = useMemo(() => {
        let data: Record<string, any>[] = [];
        let byDay = DateTime.groupByDay(notes, (n) => n.lastAccess);
        for (const d in byDay) {
            data.push({
                date: d,
                notes: byDay[d].length,
            });
        }
        /* for (const n of notes) { */
        /*     data.push({ */
        /*         category: "noteType" in n ? n.noteType : "Notebook", */
        /*         lastAccess: n.lastAccess */
        /*     }) */
        /* } */
        return {
            chartData: data,
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
            tooltipFormatter={(...data) => {
                if ("date" in data[4]) {
                    return <div>{DateTime.formatDate(data[4].date as string)}</div>;
                }
                return null;
            }}
            bars={[
                {
                    dataKey: "notes",
                    fill: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary))",
                    label: false,
                },
            ]}
        />
    );
};

NotesPlot.displayName = "NotesPlot";

export default NotesPlot;
