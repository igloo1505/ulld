import { serverClient } from "@ulld/api/serverClient";
import React from "react";
import { cn } from "@ulld/utilities/cn";
import TotalNotesCard from "./cards/small/totalNotes";
import PlaceholderCard from "./cards/placeholder";
import { getModularDashboardTestData } from "../../test/generateTestData";
import NotesByCategoryDonutCard from "./cards/small/notesByCategoryDonut/main";
import AccessByCategoryDonut from "./cards/small/accessByCategoryDonut/main";
import { clampMaxPlotColors } from "./util/utilityFunctions";
import RecentlyAccessNotesList from "./cards/tall/recentlyAccessNotesList/main";
import MainTasklistPlot from "./cards/wide/mainNotePlot/main";

interface ModularDashboardProps {
    searchParams?: object;
}

const ModularDashboard = async (props: ModularDashboardProps) => {
    /* let data = await serverClient.universalNotes.getUserOverview(); */
    let data = getModularDashboardTestData();
    let categoryColors: Record<string, string> = {};

    data.uniqueNoteTypes.forEach((t, i) => {
        categoryColors[t] = `hsl(var(--chart-${clampMaxPlotColors(i)}))`;
    });

    const initialTaskData = await serverClient.toDo.getTasksByCompletionDate({
        start: new Date("1/1/1970")
    })


    return (
        <div
            className={cn(
                "my-4 px-4 md:px-8 w-full h-screen min-h-fit grid grid-rows-[calc(50vh-32px)_calc(25vh-32px)_calc(25vh-32px)] gap-4",
            )}
        >
            <div
                className={"w-full h-full grid grid-cols-[3fr_1fr] gap-4"}
            >
                <MainTasklistPlot
                    initialData={initialTaskData}
                    totalNotes={data.lastAccessNotes.length}
                />
                <PlaceholderCard 
                    label="Tag list"
                />
            </div>
                <RecentlyAccessNotesList 
                notes={data.lastAccessNotes}
            />
            <div className={"grid grid-cols-3 gap-4 h-full"}>
                <NotesByCategoryDonutCard
                    className={""}
                    colors={categoryColors}
                    notes={
                        data.lastAccessNotes.filter((x) => x.type === "mdxNote") as any
                    }
                />
                <AccessByCategoryDonut
                    className={""}
                    colors={categoryColors}
                    notes={
                        data.lastAccessNotes.filter((x) => x.type === "mdxNote") as any
                    }
                    firstSync={data.overallFirstSync}
                />
                <TotalNotesCard
                    totalNotes={data.totalNotes.total}
                    earliestSync={data.overallFirstSync}
                    className={""}
                />
            </div>
        </div>
    );
};

ModularDashboard.displayName = "ModularDashboard";

export default ModularDashboard;
