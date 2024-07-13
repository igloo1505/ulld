import { UniqueTaggables } from "@ulld/utilities/types";
import { serverClient } from "@ulld/api/serverClient"
import { ReactNode } from "react";
import { TodoTaskOutput } from "@ulld/parsers/plugins/todos";

export interface TaskDetailsProps {
    isModal: boolean;
    data: TodoTaskOutput
}


export interface AddTaskSearchParams {
    listName?: string
    editing?: string
    listId?: string
}


export interface AddTaskProps {
    isModal: boolean;
    existingTaggables: UniqueTaggables;
    sp: AddTaskSearchParams
    lists: { label: string, id: number }[]
}

export type AddTaskListProps = Pick<AddTaskProps, "isModal" | "existingTaggables">

export interface TaskManagerPageProps {

}


export interface TaskListSearchResultsListProps {
    children: ReactNode;
}


export interface TaskListSearchResultsListProps {
    children: ReactNode
}
