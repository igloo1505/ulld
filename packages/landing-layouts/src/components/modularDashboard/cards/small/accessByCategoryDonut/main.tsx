"use client";
import { DonutChart } from "@ulld/plot/single/donut";
import React, { useMemo, useState } from "react";
import { clamp } from "@ulld/utilities/general";
import { ChartConfig } from "@ulld/plot/types";
import { BaseCardProps, ModularDashboardData } from "src/types";
import { DateTime, TimePeriodOption } from "@ulld/utilities/dateTime";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import TimePeriodToggle from "../../../util/timePeriodToggle/main";
import CardContainer from "../../../util/cardContainer";
import CardMutedDesc from "../../../util/cardMutedDesc";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { useDashboardContext } from "../../../util/provider";

interface AccessByCategoryDonutProps extends BaseCardProps {
    colors: Record<string, string>;
}

const AccessByCategoryDonut = ({
    colors,
    ...props
}: AccessByCategoryDonutProps) => {
    let [_timePeriod, setTimePeriod] = useLocalStorage<TimePeriodOption>(
        "ulld-dashboard-cat-by-access",
        "30 Days",
    );
    let { timePeriod, filteredNotes: items } = useDashboardContext();
    let data = useMemo(() => {
        let byNoteType: Record<string, number> = {};
        for (const n of items) {
            if ("noteType" in n) {
                let _noteType = n.noteType as string
                if (!(_noteType in byNoteType)) {
                    byNoteType[_noteType] = 1;
                } else {
                    byNoteType[_noteType] = byNoteType[_noteType] + 1;
                }
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
            <CardMutedDesc
                right={<TimePeriodToggle value={timePeriod || _timePeriod} onChange={setTimePeriod} />}
            >
                Recently accessed notes
            </CardMutedDesc>
            <DonutChart
                className={"w-full h-full pb-4"}
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
