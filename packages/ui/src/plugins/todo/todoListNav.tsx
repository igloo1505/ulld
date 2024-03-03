import { buttonVariants } from '#/components/shad/ui/button';
import { formatSearchAllParams } from '#/lib/formatting/formatSearchAllParams';
import Link from 'next/link';
import React from 'react'
import { TaskListIds } from './todoListDataTable';
import { NotebookPenIcon } from 'lucide-react';



interface ToDoListNavProps {
    listNameValue?: TaskListIds
    activeLists: TaskListIds[]
}

const ToDoListNav = ({ listNameValue, activeLists }: ToDoListNavProps) => {
    return (
        <div className={"w-full flex flex-row justify-end items-center gap-6"}>
            <div id="todo-list-delete-slot" />
            <Link
                className={buttonVariants({ variant: "outline" })}
                href={listNameValue ? `/todo/add/task?${formatSearchAllParams({
                    listName: listNameValue
                })}` : (activeLists && activeLists?.length === 1) ? `/todo/add/task?listId=${activeLists[0].id}` : "/todo/add/task"}>
                <NotebookPenIcon className="mr-2 h-4 w-4" />
                Add Task</Link>
        </div>
    )
}


ToDoListNav.displayName = "ToDoListNav"


export default ToDoListNav;
