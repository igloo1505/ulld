import { serverClient } from "@ulld/api/serverClient";
import React from "react";
import { cn } from "@ulld/utilities/cn";
import TotalNotesCard from "./cards/small/totalNotes";
import PlaceholderCard from "./cards/placeholder";
import { getModularDashboardTestData, getTaskManagerOverviewTestData } from "../../test/generateTestData";
import NotesByCategoryDonutCard from "./cards/small/notesByCategoryDonut/main";
import AccessByCategoryDonut from "./cards/small/accessByCategoryDonut/main";
import RecentlyAccessNotesList from "./cards/tall/recentlyAccessNotesList/main";
import MainTasklistPlot from "./cards/wide/mainNotePlot/main";
import { DashboardProvider } from "./util/provider";
import { clampInColorArray } from "./util/staticData";


const ModularDashboard = async () => {
    /* let data = await serverClient.universalNotes.getUserOverview(); */
    /* const initialTaskData = await serverClient.toDo.getTaskManagerOverview() */

    let data = getModularDashboardTestData();
    let categoryColors: Record<string, string> = {};

    data.uniqueNoteTypes.forEach((t, i) => {
        categoryColors[t] = clampInColorArray(i);
    });

    let initialTaskData = getTaskManagerOverviewTestData()

    return (
        <DashboardProvider
            initialValues={{
                notes: data.lastAccessNotes,
            }}
            initialModularData={data}
            initialTaskData={initialTaskData}
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
                    />
                    <PlaceholderCard label="Tag list" />
                </div>
                <div className={"w-full h-[calc(33%-1rem)]"}>
                    <RecentlyAccessNotesList />
                </div>
                <div
                    className={"flex flex-row justify-between gap-4 h-[calc(33%-1rem)]"}
                >
                    <NotesByCategoryDonutCard
                        className={""}
                        colors={categoryColors}
                    />
                    <AccessByCategoryDonut
                        className={""}
                        colors={categoryColors}
                    />
                    <TotalNotesCard
                        className={"w-1/3"}
                    />
                </div>
            </div>
        </DashboardProvider>
    );
};

ModularDashboard.displayName = "ModularDashboard";

export default ModularDashboard;
