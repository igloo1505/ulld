"use client";
import { serverClient } from "@ulld/api/serverClient";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
import React, { useState } from "react";
import CardContainer from "../../../util/cardContainer";
import TaskListCardDetails from "./taskListDetailsRow";
import { TaskListsData } from "../../../types";

interface MainTasklistPlotProps {
    initialData: Awaited<
        ReturnType<typeof serverClient.toDo.getTasksByCompletionDate>
    >;
    totalNotes: number;
    taskLists: TaskListsData;
    overdueTaskCount?: number | null;
}

const MainTasklistPlot = ({
    initialData,
    totalNotes,
    taskLists,
    overdueTaskCount,
}: MainTasklistPlotProps) => {
    const [timePeriod, setTimePeriod] = useState<TimePeriodOption>("All Time");
    return (
        <CardContainer
            className={"w-full h-full flex flex-col justify-center items-center"}
        >
            <TaskListCardDetails
                totalNotes={totalNotes}
                active={timePeriod}
                onChange={setTimePeriod}
                overdueTaskCount={overdueTaskCount}
            />
            <div className={"flex-grow"}>Plot goes here</div>
        </CardContainer>
    );
};

MainTasklistPlot.displayName = "MainTasklistPlot";

export default MainTasklistPlot;
