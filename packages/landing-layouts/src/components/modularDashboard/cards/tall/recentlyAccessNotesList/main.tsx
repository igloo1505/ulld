"use client"
import React, { useMemo } from "react";
import CardContainer from "../../../util/cardContainer";
import CardLabelText from "../../../util/cardLabel";
import { ScrollArea } from "@ulld/tailwind/scroll-area";
import { RecentlyAccessedNoteItem } from "./item";
import { useDashboardContext } from "../../../util/provider";


const RecentlyAccessNotesList = () => {
  const { notes } = useDashboardContext();
  let items = useMemo(() => notes.slice(0, 50), [notes]);
  return (
    <CardContainer
      className={"w-full justify-start h-fit max-h-full"}
    >
      <CardLabelText className={"my-4"}>Recently Accessed</CardLabelText>
      <ScrollArea className={"w-full h-[min(250px,70vh)]"}>
        {items.map((x, i) => {
          return <RecentlyAccessedNoteItem item={x} key={`recent-note-${i}`} />;
        })}
      </ScrollArea>
    </CardContainer>
  );
};

RecentlyAccessNotesList.displayName = "RecentlyAccessNotesList";

export default RecentlyAccessNotesList;
