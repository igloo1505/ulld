import React, { useMemo } from "react";
import CardContainer from "../../../util/cardContainer";
import {
    BaseCardProps,
    ModularDashboardData,
} from "../../../../../../src/types";
import { DonutChart } from "@ulld/plot/single/donut";
import { clamp } from "@ulld/utilities/general";
import FormattedDonutLabel from "./formattedLabel";
import { ChartConfig } from "@ulld/plot/types";
import CardMutedDesc from "../../../util/cardMutedDesc";

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
        <CardContainer {...props} className={"h-full w-1/3"}>
            <CardMutedDesc>
              Notes by category
            </CardMutedDesc>
            <DonutChart
                className={"w-full h-full"}
                chartData={data.chartData}
                chartConfig={data.chartConfig}
                dataKey="notes"
                nameKey="category"
                total={data.total}
                totalLabel="Mdx Notes"
            />
        </CardContainer>
    );
};

NotesByCategoryDonutCard.displayName = "NotesByCategoryDonutCard";

export default NotesByCategoryDonutCard;
