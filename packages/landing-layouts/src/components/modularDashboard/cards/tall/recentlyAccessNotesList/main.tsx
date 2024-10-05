import React from "react";
import CardContainer from "../../../util/cardContainer";
import CardLabelText from "../../../util/cardLabel";
import { RecentlyAccessedNoteItem } from "./item";
import { cn } from "@ulld/utilities/cn";
import { ModularDashboardData } from "../../../types";

interface RecentlyAccessedNotesProps {
    className?: string;
    notes: ModularDashboardData["lastAccessNotes"];
}

const RecentlyAccessNotesList = ({
    className,
    notes,
}: RecentlyAccessedNotesProps) => {
    let items = notes.slice(0, 50);
    console.log("typeof window: ", typeof window)
    return (
        <CardContainer
            className={cn("w-full justify-start h-fit max-h-[50vh]", className)}
        >
            <CardLabelText className={"my-4"}>Recently Accessed</CardLabelText>
            <div
                className={cn("w-full h-[200px] overflow-y-auto overflow-x-hidden min-scrollbar")}
            >
                {items.map((x, i) => {
                    return <RecentlyAccessedNoteItem item={x} key={`recent-note-${i}`} />;
                })}
            </div>
        </CardContainer>
    );
};

RecentlyAccessNotesList.displayName = "RecentlyAccessNotesList";

export default RecentlyAccessNotesList;
