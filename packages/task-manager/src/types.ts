import { UniqueTaggables } from "@ulld/utilities/types";
import { ReactNode } from "react";
import { ToDoSearchParams, TodoTaskOutput } from "@ulld/parsers/plugins/todos";
import { serverClient } from "@ulld/api/serverClient";

export interface TaskDetailsProps {
    isModal: boolean;
    data: TodoTaskOutput;
}

export interface AddTaskSearchParams {
    listName?: string;
    editing?: string;
    listId?: string;
}

export interface AddTaskProps {
    isModal: boolean;
    existingTaggables: UniqueTaggables;
    sp: AddTaskSearchParams;
    lists: { label: string; id: number }[];
}

export type AddTaskListProps = Pick<AddTaskProps, "isModal"> & {
    editing?: Awaited<ReturnType<typeof serverClient.toDo.getToDoListById>>;
};

type TaskListDataReturnType = Awaited<
    ReturnType<typeof serverClient.toDo.getToDos>
>;

export interface TaskManagerPageProps extends TaskListDataReturnType {
    searchParams: ToDoSearchParams
}

export interface TaskListSearchResultsListProps {
    children: ReactNode;
}

export interface TaskListSearchResultsListProps {
    children: ReactNode;
}
