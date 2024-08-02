import { BarPlot } from '@ulld/plot/single/bar';
import { ChartConfig } from '@ulld/plot/types';
import { DateTime } from '@ulld/utilities/dateTime';
import React, { useMemo } from 'react'
import { useDashboardContext } from '../../../../util/provider';
import notes from './notes';



interface TaskListCompletionPlotProps {
   
}

const TaskListCompletionPlot = (props: TaskListCompletionPlotProps) => {
    const {taskLists} = useDashboardContext()
    /* const chartData = useMemo(() => { */
    /*     let data: {date: string | Date, notes: number}[] = []; */
    /*     let byDay = DateTime.groupByDay(notes, (n) => n.lastAccess); */
    /*     for (const d in byDay) { */
    /*         data.push({ */
    /*             date: d, */
    /*             notes: byDay[d].length, */
    /*         }); */
    /*     } */
    /*     return { */
    /*         chartData: data.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()), */
    /*         chartConfig: { */
    /*             notes: { */
    /*                 label: "Notes", */
    /*                 color: "hsl(var(--primary))", */
    /*             }, */
    /*         } satisfies ChartConfig, */
    /*     }; */
    /* }, [notes]); */
    return "Welp..."
    /* return ( */
    /*     <BarPlot */
    /*         chartData={chartData.chartData} */
    /*         chartConfig={chartData.chartConfig} */
    /*         className={"w-full h-full"} */
    /*         tooltipFormatter={(...data) => { */
    /*             if ("date" in data[4]) { */
    /*                 return <div>{DateTime.formatDate(data[4].date as string)}</div>; */
    /*             } */
    /*             return null; */
    /*         }} */
    /*         bars={[ */
    /*             { */
    /*                 dataKey: "notes", */
    /*                 fill: "hsl(var(--primary))", */
    /*                 foreground: "hsl(var(--primary))", */
    /*                 label: false, */
    /*             }, */
    /*         ]} */
    /*     /> */
    /* ); */
}


TaskListCompletionPlot.displayName = "TaskListCompletionPlot"


export default TaskListCompletionPlot;
