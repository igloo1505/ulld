"use client";
import React from "react";
import CardContainer from "../../../util/cardContainer";
import TaskListCardDetails from "./taskListDetailsRow";
import MainCardPlot from "./plot";
import cn from "@ulld/utilities/cn";

interface Props {
    className?: string;
}

const MainCard = ({ className }: Props) => {
    return (
        <CardContainer
            className={cn(
                "w-full min-[650px]:h-full flex flex-col justify-center items-center",
                className,
            )}
        >
            <TaskListCardDetails />
            <MainCardPlot />
        </CardContainer>
    );
};

MainCard.displayName = "MainTasklistPlot";

export default MainCard;
