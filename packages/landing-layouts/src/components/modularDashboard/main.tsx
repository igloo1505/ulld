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
import { DashboardProvider } from "./cards/wide/mainNotePlot/provider";

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
        start: new Date("1/1/1970"),
    });

    const taskLists = await serverClient.toDo.getTaskLists();
    const overdueTaskCount = await serverClient.toDo.getOverdueTaskCount();

    return (
        <DashboardProvider
            initialValues={{
                notes: data.lastAccessNotes,
            }}
        >
            <div
                className={cn(
                    "py-4 px-4 lg:py-8 md:px-8 w-full h-screen flex flex-col gap-4",
                )}
            >
                <div
                    className={"w-full grid grid-cols-[3fr_1fr] gap-4 h-[calc(40%-1rem)]"}
                >
                    <MainTasklistPlot
                        initialData={initialTaskData}
                        totalNotes={data.lastAccessNotes.length}
                        notes={data.lastAccessNotes}
                        taskLists={taskLists}
                        overdueTaskCount={overdueTaskCount}
                    />
                    <PlaceholderCard label="Tag list" />
                </div>
                <div className={"w-full h-[calc(33%-1rem)]"}>
                    <RecentlyAccessNotesList notes={data.lastAccessNotes} />
                </div>
                <div
                    className={"flex flex-row justify-between gap-4 h-[calc(33%-1rem)]"}
                >
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
                        className={"w-1/3"}
                    />
                </div>
            </div>
        </DashboardProvider>
    );
};

ModularDashboard.displayName = "ModularDashboard";

export default ModularDashboard;
