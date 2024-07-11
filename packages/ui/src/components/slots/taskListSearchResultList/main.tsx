import React, { ReactNode } from 'react'



interface TaskListSearchResultsListProps {
    children: ReactNode
}

const TaskListSearchResultsList = ({children}: TaskListSearchResultsListProps) => {
return (
    <div className={"w-full h-fit flex flex-col justify-center items-center gap-4"}>{children}</div>
)
}


TaskListSearchResultsList.displayName = "TaskListSearchResultsList"


export default TaskListSearchResultsList;
