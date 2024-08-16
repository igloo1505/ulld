"use client"
import React, { useMemo } from "react";
import CardContainer from "../../../util/cardContainer";
import CardLabelText from "../../../util/cardLabel";
import { ScrollArea } from "@ulld/tailwind/scroll-area";
import { RecentlyAccessedNoteItem } from "./item";
import { useDashboardContext } from "../../../util/provider";
import { cn } from "@ulld/utilities/cn";

interface RecentlyAccessedNotesProps {
   className?: string
}

const RecentlyAccessNotesList = ({className}: RecentlyAccessedNotesProps) => {
  const { notes } = useDashboardContext();
  let items = useMemo(() => notes.slice(0, 50), [notes]);
  return (
    <CardContainer
      className={cn("w-full justify-start h-fit max-h-[50vh]", className)}
    >
      <CardLabelText className={"my-4"}>Recently Accessed</CardLabelText>
      <ScrollArea className={"w-full h-[200px]"}>
        {items.map((x, i) => {
          return <RecentlyAccessedNoteItem item={x} key={`recent-note-${i}`} />;
        })}
      </ScrollArea>
    </CardContainer>
  );
};

RecentlyAccessNotesList.displayName = "RecentlyAccessNotesList";

export default RecentlyAccessNotesList;
