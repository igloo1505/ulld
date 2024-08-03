import { serverClient } from "@ulld/api/serverClient";
import React from "react";
import { cn } from "@ulld/utilities/cn";
import TotalNotesCard from "./cards/small/totalNotes";
import {
    getModularDashboardTestData,
    getTaggableTestData,
    getTaskManagerOverviewTestData,
} from "../../test/generateTestData";
import NotesByCategoryDonutCard from "./cards/small/notesByCategoryDonut/main";
import AccessByCategoryDonut from "./cards/small/accessByCategoryDonut/main";
import RecentlyAccessNotesList from "./cards/tall/recentlyAccessNotesList/main";
import MainCard from "./cards/wide/mainNotePlot/main";
import { DashboardProvider } from "./util/provider";
import { clampInColorArray } from "./util/staticData";
import TagListCard from "./cards/tall/tagList/main";

const tagListTopBreakpoint = 920

const ModularDashboard = async () => {
    /* let data = await serverClient.universalNotes.getUserOverview(); */
    /* const initialTaskData = await serverClient.toDo.getTaskManagerOverview() */
    /* let taggables = await serverClient.search.getUniqueTagTopicAndSubjects() */

    

    let taggables = getTaggableTestData(300)
    let data = getModularDashboardTestData();
    let initialTaskData = getTaskManagerOverviewTestData();


    let categoryColors: Record<string, string> = {};
    data.uniqueNoteTypes.forEach((t, i) => {
        categoryColors[t] = clampInColorArray(i);
    });


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
                    "@container/dashboard py-4 px-4 lg:py-8 md:px-8 w-full h-fit @[920px]/body:h-screen min-h-fit flex flex-col gap-4",
                )}
            >
                <div
                    className={"flex flex-row justify-between gap-4 w-full h-[calc(40%-1rem)] max-h-[calc(40%-1rem)]"}
                >
                    <MainCard />
                    <TagListCard
                        taggables={taggables}
                        showKey="tagsOnTop"
                        breakPoint={tagListTopBreakpoint}
                        defaultShow
                    />
                </div>
                <div className={"w-full h-[calc(33%-1rem)]"}>
                    <RecentlyAccessNotesList />
                </div>
                <div
                    className={"flex flex-row flex-wrap justify-center gap-4 h-[calc(33%-1rem)]"}
                >
                    <NotesByCategoryDonutCard className={""} colors={categoryColors} />
                    <AccessByCategoryDonut className={""} colors={categoryColors} />
                    <TagListCard
                        taggables={taggables}
                        showKey="tagsOnBottom"
                        breakPoint={tagListTopBreakpoint}
                    />
                    <TotalNotesCard />
                </div>
            </div>
        </DashboardProvider>
    );
};

ModularDashboard.displayName = "ModularDashboard";

export default ModularDashboard;
