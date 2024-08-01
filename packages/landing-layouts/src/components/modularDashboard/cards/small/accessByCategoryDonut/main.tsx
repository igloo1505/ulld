"use client";
import { DonutChart } from "@ulld/plot/single/donut";
import React, { useMemo, useState } from "react";
import FormattedDonutLabel from "../notesByCategoryDonut/formattedLabel";
import { clamp } from "@ulld/utilities/general";
import { ChartConfig } from "@ulld/plot/types";
import { BaseCardProps, ModularDashboardData } from "src/types";
import {
    DateTime,
    timePeriodOptions,
    TimePeriodOption,
} from "@ulld/utilities/dateTime";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import TimePeriodToggle from "../../../util/timePeriodToggle/main";
import CardContainer from "../../../util/cardContainer";
import CardLabelText from "../../../util/cardLabel";
import CardMutedDesc from "../../../util/cardMutedDesc";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";

interface AccessByCategoryDonutProps extends BaseCardProps {
    notes: (ModularDashboardData["lastAccessNotes"][number] & {
        noteType: string;
    })[];
    colors: Record<string, string>;
    firstSync?: Date;
}

const AccessByCategoryDonut = ({
    notes,
    colors,
    firstSync,
    ...props
}: AccessByCategoryDonutProps) => {
    let [timePeriod, setTimePeriod] = useLocalStorage<TimePeriodOption>("ulld-dashboard-cat-by-access", "30 Days")
    const [items, setFilteredItems] = useState<
        AccessByCategoryDonutProps["notes"]
    >([]);
    useIsomorphicLayoutEffect(() => {
        let items = DateTime.filterByDateRange(
            notes,
            (n) => n.lastAccess || new Date("1/1/1970"),
            DateTime.getTimePeriod(timePeriod),
        );
        setFilteredItems(items);
    }, []);
    let data = useMemo(() => {
        let byNoteType: Record<string, number> = {};
        for (const n of items) {
            if (!(n.noteType in byNoteType)) {
                byNoteType[n.noteType] = 1;
            } else {
                byNoteType[n.noteType] = byNoteType[n.noteType] + 1;
            }
        }
        let chartData = Object.keys(byNoteType).map((k, i) => ({
            category: k,
            notes: byNoteType[k],
            fill: `hsl(var(--chart-${clamp(i, [1, 5])}))`,
        }));
        let chartConfig: ChartConfig = {};
        chartData.forEach((k, i) => {
            chartConfig[k.category] = {
                label: k.category,
                color: `hsl(var(--chart-${clamp(i, [1, 5])}))`,
            };
        });
        return {
            chartData,
            chartConfig,
            total: items.length,
        };
    }, [items]);

    return (
        <CardContainer {...props} className={"w-1/3 max-h-full justify-start"}>
            <CardMutedDesc>Recently accessed notes</CardMutedDesc>
            <TimePeriodToggle value={timePeriod} onChange={setTimePeriod} />
            <DonutChart
                className={"h-full w-full -mt-6"}
                chartData={data.chartData}
                chartConfig={data.chartConfig}
                dataKey="notes"
                nameKey="category"
                total={data.total}
                totalLabel={timePeriod}
            />
        </CardContainer>
    );
};

AccessByCategoryDonut.displayName = "AccessByCategoryDonut";

export default AccessByCategoryDonut;
