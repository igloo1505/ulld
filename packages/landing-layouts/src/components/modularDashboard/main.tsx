import React from "react";
import { serverClient } from "@ulld/api/serverClient";
import { cn } from "@ulld/utilities/cn";
import TotalNotesCard from "./cards/small/totalNotes";
import NotesByCategoryDonutCard from "./cards/small/notesByCategoryDonut/main";
import AccessByCategoryDonut from "./cards/small/accessByCategoryDonut/main";
import RecentlyAccessNotesList from "./cards/tall/recentlyAccessNotesList/main";
import MainCard from "./cards/wide/mainNotePlot/main";
import { DashboardProvider } from "./util/provider";
import { clampInColorArray } from "./util/staticData";
import TagListCard from "./cards/tall/tagList/main";
import { TaggableData } from "./types";
import { cookies } from "next/headers";

const tagListTopBreakpoint = 980;

const dashboardId = "ulld-dashboard-container";

const ModularDashboard = async () => {
    const cookieJar = cookies();

    let data = await serverClient.universalNotes.getUserOverview();

    const initialTaskData = await serverClient.toDo.getTaskManagerOverview();

    let taggables =
        (await serverClient.search.getUniqueTagTopicAndSubjects()) as TaggableData;

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
            online={cookieJar.get("onlineStatus")?.value === "online"}
        >
            <div
                className={cn(
                    "@container/dashboard bg-background py-4 px-4 lg:py-8 md:px-8 w-full h-fit min-h-fit flex flex-col gap-4",
                )}
                id={dashboardId}
            >
                <div
                    className={
                        "grid grid-cols-1 extraMedium:grid-cols-[1fr_auto] gap-4 w-full md:h-[calc(40vh-1rem)] min-h-[350px] max-h-[calc(40vh-1rem)]"
                    }
                >
                    <MainCard className={"max-h-full"} />
                    <TagListCard
                        taggables={taggables}
                        showKey="tagsOnTop"
                        breakPoint={tagListTopBreakpoint}
                        defaultShow
                        containerId={dashboardId}
                        className={"h-full w-[300px]"}
                    />
                </div>
                <RecentlyAccessNotesList
                    notes={data.lastAccessNotes}
                    className={
                        "w-full h-[calc(33%-1rem)] extraMedium:h-[calc(33vh-1rem)]"
                    }
                />
                <div
                    className={
                        "flex flex-col justify-center items-center md:grid grid-cols-2 grid-rows-2 extraMedium:grid-cols-[1fr_1fr_1fr] extraMedium:grid-rows-1 gap-4 h-[calc(33%-1rem)]"
                    }
                >
                    <NotesByCategoryDonutCard className={""} colors={categoryColors} />
                    <AccessByCategoryDonut className={""} colors={categoryColors} />
                    <TagListCard
                        taggables={taggables}
                        showKey="tagsOnBottom"
                        breakPoint={tagListTopBreakpoint}
                        containerId={dashboardId}
                        className={"!w-full h-[min(80vh,250px)] max-w-full md:h-full"}
                    />
                    <TotalNotesCard />
                </div>
            </div>
        </DashboardProvider>
    );
};

ModularDashboard.displayName = "ModularDashboard";

export default ModularDashboard;
