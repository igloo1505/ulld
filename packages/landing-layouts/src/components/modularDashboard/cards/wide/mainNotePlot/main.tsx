"use client";
import React, { useEffect, useState } from "react";
import CardContainer from "../../../util/cardContainer";
import TaskListCardDetails from "./taskListDetailsRow";
import { ModularDashboardData, TaskListsData, TasksByCompletion } from "../../../types";
import MainCardPlot from "./plot";
import { useDashboardContext, useDashboardDispatch } from "./provider";


export interface MainTasklistPlotProps {
    initialData: TasksByCompletion;
    totalNotes: number;
    taskLists: TaskListsData;
    overdueTaskCount?: number | null;
    notes: ModularDashboardData["lastAccessNotes"]
}

const MainTasklistPlot = ({
    initialData,
    totalNotes,
    taskLists,
    overdueTaskCount,
    notes
}: MainTasklistPlotProps) => {
    const state = useDashboardContext()
    const dispatch = useDashboardDispatch()
    console.log("state: ", state)
    useEffect(() => {
        if(!state.notes.length && notes.length){
            dispatch({
                type: "setAllNotes",
                payload: {
                    notes: notes,
                    filteredNotes: notes
                }
            })
        }
    }, [notes])
    return (
        <CardContainer
            className={"w-full h-full flex flex-col justify-center items-center"}
        >
            <TaskListCardDetails
                totalNotes={totalNotes}
                overdueTaskCount={overdueTaskCount}
            />
                <MainCardPlot
            />
        </CardContainer>
    );
};

MainTasklistPlot.displayName = "MainTasklistPlot";

export default MainTasklistPlot;
