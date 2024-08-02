import React, { useMemo } from "react";
import { BarPlot } from "@ulld/plot/single/bar";
import { ChartConfig } from "@ulld/plot/types";
import { DateTime } from "@ulld/utilities/dateTime";
import { useDashboardContext } from "../../../../util/provider";

/* PRIORITY: Make this plot stacked. It's currently showing one of each for each day, which makes zero sense on the user's end. */

const NotesPlot = () => {
  const { filteredNotes: notes, timePeriod } = useDashboardContext();
  const is24 = timePeriod === "24 hours";
  const chartData = useMemo(() => {
    let data: { date: string | Date; mdx: number, notebook: number }[] = [];
    let byDay = is24 ? DateTime.groupByHour(notes, (n) => n.firstSync) : DateTime.groupByDay(notes, (n) => n.firstSync)
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

  const format24HourString = (val: string) => {
    let n = parseInt(val);
    if (typeof n === "number" && !Number.isNaN(n)) {
      if (n < 12) {
        return `${n} AM`;
      } else {
        let _n = n - 12;
        return `${_n === 0 ? 12 : _n} PM`;
      }
    }
    return null;
  };

  return (
    <BarPlot
      chartData={chartData.chartData}
      chartConfig={chartData.chartConfig}
      className={"w-full h-full"}
      tooltipFormatter={(...data) => {
        let idx = data[3]
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
            <div className={"w-full flex flex-row justify-between items-start"}>
                <div>{data[1] === "mdx" ? "Mdx" : "Notebooks"}</div>
                <div className={"ml-auto"}>{data[4][data[1] as any] as string}</div>
            </div>
            </>
          );
        }
        return null;
      }}
      bars={[
        {
          dataKey: "mdx",
          fill: "hsl(var(--chart-1))",
          foreground: "hsl(var(--chart-1))",
          label: false,
        },
        {
          dataKey: "notebook",
          fill: "hsl(var(--chart-2))",
          foreground: "hsl(var(--chart-2))",
          label: false,
        },
      ]}
    />
  );
};

NotesPlot.displayName = "NotesPlot";

export default NotesPlot;
