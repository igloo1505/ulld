import React, { useMemo } from "react";
import CardContainer from "../../../util/cardContainer";
import CardLabelText from "../../../util/cardLabel";
import { ScrollArea } from "@ulld/tailwind/scroll-area";
import { ModularDashboardData } from "../../../types";
import { RecentlyAccessedNoteItem } from "./item";

interface RecentlyAccessNotesListProps {
    notes: ModularDashboardData["lastAccessNotes"];
}

const RecentlyAccessNotesList = ({
    notes,
    ...props
}: RecentlyAccessNotesListProps) => {
    let items = useMemo(() => notes.slice(0, 50), [notes]);
    return (
        <CardContainer {...props} className={"w-full justify-start max-h-[max(80vh) flex-grow]"}>
            <CardLabelText className={"my-4"}>Recently Accessed</CardLabelText>
            <ScrollArea className={"w-full"}>
                {items.map((x, i) => {
                    return <RecentlyAccessedNoteItem item={x} key={`recent-note-${i}`} />;
                })}
            </ScrollArea>
        </CardContainer>
    );
};

RecentlyAccessNotesList.displayName = "RecentlyAccessNotesList";

export default RecentlyAccessNotesList;
