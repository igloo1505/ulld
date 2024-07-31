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

    return (
        <div
            className={cn(
                "py-4 px-4 md:px-8 w-full h-fit min-h-screen grid grid-cols-[1fr_3fr] grid-rows-1 gap-4",
            )}
        >
            <div
                className={"w-full h-full grid grid-cols-1 gap-4 grid-rows-[250px_1fr]"}
            >
                <TotalNotesCard
                    totalNotes={data.totalNotes.total}
                    earliestSync={data.overallFirstSync}
                    className={""}
                />
                <RecentlyAccessNotesList notes={data.lastAccessNotes} />
            </div>
            <div className={"w-full flex flex-col gap-4"}>
                <div className={"grid grid-cols-2 h-[250px] gap-4"}>
                    <PlaceholderCard className={""} label="Wide plot 1" />
                    <PlaceholderCard className={""} label="Wide plot 2" />
                </div>
                <div className={"grid grid-cols-3 gap-4 h-[40vh]"}>
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
                    <PlaceholderCard className={""} />
                </div>
                <div className={"grid grid-cols-3 gap-4 h-[40vh]"}>
                    <PlaceholderCard className={""} />
                    <PlaceholderCard className={""} />
                    <PlaceholderCard className={""} />
                </div>
            </div>
        </div>
    );
};

ModularDashboard.displayName = "ModularDashboard";

export default ModularDashboard;
