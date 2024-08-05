"use client";
import React, { useMemo } from "react";
import CardContainer from "../../../util/cardContainer";
import { BaseCardProps } from "../../../../../../src/types";
import { DonutChart } from "@ulld/plot/single/donut";
import { ChartConfig } from "@ulld/plot/types";
import CardMutedDesc from "../../../util/cardMutedDesc";
import { useDashboardContext } from "../../../util/provider";
import { clampInColorArray } from "../../../util/staticData";
import { searchAllParamsToSearchParamsClass } from "@ulld/utilities/searchUtils";
import { cn } from "@ulld/utilities/cn";

interface NotesByCategoryDonutCardProps extends BaseCardProps {
    colors: Record<string, string>;
    className?: string
}

const NotesByCategoryDonutCard = ({
    colors,
    className,
    ...props
}: NotesByCategoryDonutCardProps) => {
    const { filteredNotes: notes } = useDashboardContext();
    let data = useMemo(() => {
        let byNoteType: Record<string, number> = {};
        for (const n of notes) {
            if ("noteType" in n) {
                let _noteType = n.noteType as string;
                if (!(_noteType in byNoteType)) {
                    byNoteType[_noteType] = 1;
                } else {
                    byNoteType[_noteType] = byNoteType[_noteType] + 1;
                }
            }
        }
        let chartData = Object.keys(byNoteType).map((k, i) => {
            let sp = searchAllParamsToSearchParamsClass({
                categories: [k],
            });
            return {
                category: k,
                notes: byNoteType[k],
                fill: k in colors ? colors[k] : clampInColorArray(i),
                href: `/searchAll?${sp.toString()}`,
            };
        });
        let chartConfig: ChartConfig = {};
        chartData.forEach((k, i) => {
            chartConfig[k.category] = {
                label: k.category,
                color: k.category in colors ? colors[k.category] : clampInColorArray(i),
            };
        });
        return {
            chartData,
            chartConfig,
            total: notes.length,
        };
    }, [notes]);

    return (
        <CardContainer
            {...props}
            className={cn(
                "w-full h-[min(80vh,250px)] md:min-h-[250px] md:h-full justify-start",
                className,
            )}
        >
            <CardMutedDesc>Notes by category</CardMutedDesc>
            <DonutChart
                className={"w-full h-full pb-4"}
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
