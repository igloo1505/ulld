import React, { useMemo } from "react";
import CardContainer from "../../../util/cardContainer";
import {
    BaseCardProps,
    ModularDashboardData,
} from "../../../../../../src/types";
import { DonutChart } from "@ulld/plot/single/donut";
import { ChartConfig } from "node_modules/@ulld/plot/src/lib/shad/shadChart";
import { clamp } from "@ulld/utilities/general";
import FormattedDonutLabel from "./formattedLabel";

interface NotesByCategoryDonutCardProps extends BaseCardProps {
    notes: (ModularDashboardData["lastAccessNotes"][number] & {
        noteType: string;
    })[];
    colors: Record<string, string>
}

const NotesByCategoryDonutCard = ({
    notes,
    colors,
    ...props
}: NotesByCategoryDonutCardProps) => {
    let data = useMemo(() => {
        let byNoteType: Record<string, number> = {};
        for (const n of notes) {
            if (!(n.noteType in byNoteType)) {
                byNoteType[n.noteType] = 1;
            } else {
                byNoteType[n.noteType] = byNoteType[n.noteType] + 1;
            }
        }
        let chartData = Object.keys(byNoteType).map((k, i) => ({
            category: k,
            notes: byNoteType[k],
            fill: k in colors ? colors[k] : `hsl(var(--chart-${clamp(i, [1, 5])}))`,
        }));
        let chartConfig: ChartConfig = {};
        chartData.forEach((k, i) => {
            chartConfig[k.category] = {
                label: k.category,
                color: k.category in colors ? colors[k.category] : `hsl(var(--chart-${clamp(i, [1, 5])}))`,
            };
        });
        return {
            chartData,
            chartConfig,
            total: notes.length,
        };
    }, [notes]);

    return (
        <CardContainer {...props} className={"min-h-[200px] max-h-full"}>
            <DonutChart
                className={"w-full h-full m-8"}
                chartData={data.chartData}
                chartConfig={data.chartConfig}
                dataKey="notes"
                nameKey="category"
                total={data.total}
                totalLabel="Mdx Notes"
                externalLabel={FormattedDonutLabel}
            />
        </CardContainer>
    );
};

NotesByCategoryDonutCard.displayName = "NotesByCategoryDonutCard";

export default NotesByCategoryDonutCard;