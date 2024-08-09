import React from "react";
import { TaskListSearchResultsListProps } from "../../types";

const TaskListSearchResultsList = ({
    children,
    resultCount
}: TaskListSearchResultsListProps) => {

    if(resultCount === 0){
        return null
    }

    return (
        <div
            className={"w-full h-fit flex flex-col justify-center items-center gap-4 px-8 pt-8 md:px-16"}
        >
            {children}
        </div>
    );
};

TaskListSearchResultsList.displayName = "TaskListSearchResultsList";

export default TaskListSearchResultsList;
