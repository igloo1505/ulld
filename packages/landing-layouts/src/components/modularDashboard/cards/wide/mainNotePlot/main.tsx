"use client";
import React from "react";
import CardContainer from "../../../util/cardContainer";
import TaskListCardDetails from "./taskListDetailsRow";
import MainCardPlot from "./plot";


const MainCard = () => {
    return (
        <CardContainer
            className={"w-2/3 flex-grow h-full flex flex-col justify-center items-center"}
        >
            <TaskListCardDetails />
            <MainCardPlot />
        </CardContainer>
    );
};

MainCard.displayName = "MainTasklistPlot";

export default MainCard;
