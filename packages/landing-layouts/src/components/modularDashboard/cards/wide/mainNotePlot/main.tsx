"use client";
import React from "react";
import CardContainer from "../../../util/cardContainer";
import TaskListCardDetails from "./taskListDetailsRow";
import MainCardPlot from "./plot";

export interface MainTasklistPlotProps {
}

const MainTasklistPlot = (props: MainTasklistPlotProps) => {

    return (
        <CardContainer
            className={"w-full h-full flex flex-col justify-center items-center"}
        >
            <TaskListCardDetails />
            <MainCardPlot />
        </CardContainer>
    );
};

MainTasklistPlot.displayName = "MainTasklistPlot";

export default MainTasklistPlot;
