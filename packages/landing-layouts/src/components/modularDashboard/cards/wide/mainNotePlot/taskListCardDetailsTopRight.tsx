import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { MainPlotFilterType, mainPlotTypes } from "../../../types";
import cn from "@ulld/utilities/cn";
import ClockDisplay from "./clockDisplay";


const TaskListDetailsTopRightCard = (
) => {
    const [plotFilterType, setPlotFilterType] =
        useLocalStorage<MainPlotFilterType>("ulld-dashboard-main-plot-filter");
    const [active, setActive] = useState<MainPlotFilterType | null>(null);

    useEffect(() => {
        setActive(plotFilterType);
    }, [plotFilterType]);

    return (
        <div className={"w-full flex flex-col justify-center items-center"}>
            <div className={"flex-grow"}><ClockDisplay /></div>
            <div className={"w-full flex flex-row justify-end items-center"}>
                <div
                    className={"grid gap-4"}
                    style={{
                        gridTemplateColumns: `repeat(${mainPlotTypes.length}, 1fr)`,
                    }}
                >
                    {mainPlotTypes.map((t) => {
                        return (
                            <a
                                role="button"
                                key={`plot-filter-type-${t}`}
                                onClick={() => setPlotFilterType(t)}
                                className={cn(
                                    "text-sm w-full h-full flex justify-center items-center border rounded-[20px] py-2 px-3 transition-colors duration-200",
                                    active === t
                                        ? "border-primary"
                                        : " hover:bg-secondary hover:text-secondary-foreground",
                                )}
                            >
                                {t}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

TaskListDetailsTopRightCard.displayName = "TaskListDetailsTopRightCard";

export default TaskListDetailsTopRightCard;
