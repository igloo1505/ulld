import Link from 'next/link';
import { NotebookPenIcon } from 'lucide-react';
import { formatSearchAllParams } from '@ulld/state/searchParamSchemas/utilities/formatSearchAllParams';
import { buttonVariants } from '@ulld/tailwind/button';
import { TaskListIds } from '@ulld/utilities/types/todos';



interface ToDoListNavProps {
    listNameValue?: TaskListIds
    activeLists: TaskListIds[]
}

export const TaskListNav = ({ listNameValue, activeLists }: ToDoListNavProps) => {
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


TaskListNav.displayName = "TaskListNav"
