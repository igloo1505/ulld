"use client";
import { DonutChart } from "@ulld/plot/single/donut";
import React, { useMemo } from "react";
import { ChartConfig } from "@ulld/plot/types";
import { BaseCardProps } from "src/types";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
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
            if (!(n.type in byNoteType)) {
                byNoteType[n.type] = 1;
            } else {
                byNoteType[n.type] = byNoteType[n.type] + 1;
            }
        }
        let chartData = Object.keys(byNoteType).map((k, i) => ({
            category: k,
            notes: byNoteType[k],
            fill: `hsl(var(--chart-${i + 1}))`,
        }));

        let chartConfig: ChartConfig = {};

        chartData.forEach((k, i) => {
            chartConfig[k.category] = {
                label: k.category,
                color: `hsl(var(--chart-${i + 1}))`,
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
            <CardMutedDesc>
                New notes by format
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
