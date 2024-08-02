"use client";
import React from "react";
import { useClock } from "@ulld/hooks/useClock";
import { DateTime } from "@ulld/utilities/dateTime";

interface ClockDisplayProps { }

const ClockDisplay = (props: ClockDisplayProps) => {
    const data = useClock(
        (d) => "",
        "minute",
    );
    return (
        <div className={"flex flex-col justify-end items-end"}>
            <div>{DateTime.formatDate(data.date, true, "dddd MMMM Do YYYY ")}</div>
            <div>
            {DateTime.formatDate(data.date, true, "hh:mm a")}
            </div>
        </div>
    );
};

ClockDisplay.displayName = "ClockDisplay";

export default ClockDisplay;
