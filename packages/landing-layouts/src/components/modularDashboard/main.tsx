import { serverClient } from "@ulld/api/serverClient";
import React from "react";
import { cn } from "@ulld/utilities/cn";
import TotalNotesCard from "./cards/small/totalNotes";
import PlaceholderCard from "./cards/placeholder";

interface ModularDashboardProps {
    searchParams?: object;
}

const ModularDashboard = async (props: ModularDashboardProps) => {
    let data = await serverClient.universalNotes.getUserOverview();
    return (
        <div
            className={cn(
                "py-4 px-4 md:px-8 grid w-full h-fit min-h-screen grid grid-cols-[1fr_3fr] grid-rows-1 gap-4",
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
                <PlaceholderCard className={""} label="Tall list" />
            </div>
            <div className={"w-full grid grid-rows-[250px_1fr_1fr] gap-4"}>
                <div className={"grid grid-cols-2 gap-4"}>
                    <PlaceholderCard
                        className={""}
                        label="Wide plot 1"
                    />
                    <PlaceholderCard
                        className={""}
                        label="Wide plot 2"
                    />
                </div>
                <div className={"grid grid-cols-3 gap-4"}>
                    <PlaceholderCard className={""} />
                    <PlaceholderCard className={""} />
                    <PlaceholderCard className={""} />
                </div>
                <div className={"grid grid-cols-3 gap-4"}>
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
