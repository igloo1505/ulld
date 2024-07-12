import React from "react";
import { TaskListSearchResultsListProps } from "../../types";

const TaskListSearchResultsList = ({
    children,
}: TaskListSearchResultsListProps) => {
    return (
        <div
            className={"w-full h-fit flex flex-col justify-center items-center gap-4"}
        >
            {children}
        </div>
    );
};

TaskListSearchResultsList.displayName = "TaskListSearchResultsList";

export default TaskListSearchResultsList;
