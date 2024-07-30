import { UniqueTaggables } from "@ulld/utilities/types";
import { ReactNode } from "react";
import { ToDoSearchParams, TodoTaskOutput } from "@ulld/parsers/plugins/todos";
import type { serverClient } from "@ulld/api/serverClient";
import { Table } from "@tanstack/react-table";
import { Path } from "@ulld/full-form/form";

export interface TaskListIds {
    label: string;
    id: number;
    active: boolean;
}

export type DropdownOptionType = {
    name?: string;
    label: React.ReactNode;
    id?: number;
    icon?: React.FC<{ className?: string }>;
    active?: boolean;
};

export interface DataTableBaseProps<T extends unknown> {
    table: Table<T>;
    label?: string | Path<T>;
    placeholder?: string;
}

export type ToDoTableOutput = TaskManagerTableProps["items"][number];

export interface TaskManagerTableProps {
    searchParams: ToDoSearchParams;
    items: TodoTaskOutput[];
    lists: TaskListIds[];
    activeLists: TaskListIds[];
    activeListIds: number[];
}

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
    searchParams: AddTaskSearchParams;
    lists: { label: string; id: number }[];
}

export type AddTaskListProps = Pick<AddTaskProps, "isModal"> & {
    editing?: Awaited<ReturnType<typeof serverClient.toDo.getToDoListById>>;
    searchParams: {
        editing?: string
    }
};

type TaskListDataReturnType = Awaited<
    ReturnType<typeof serverClient.toDo.getToDos>
>;

export interface TaskManagerPageProps extends TaskListDataReturnType {
    searchParams: ToDoSearchParams;
}

export interface TaskListSearchResultsListProps {
    children: ReactNode;
}

export interface TaskListSearchResultsListProps {
    children: ReactNode;
}


export interface DataTableDropdownCheckboxListInputProps<T extends unknown> extends DataTableBaseProps<T> {
    options: DropdownOptionType[]
    selectedIds: number[]
    toggle: (item: DropdownOptionType) => void
    clear?: () => void
    searchParams: ToDoSearchParams
    icon?: React.FC<{ className?: string }>
}


export interface DropdownCheckboxItemProps {
    item: DropdownOptionType
    toggle: (item: DropdownOptionType) => void
    isSelected: boolean
}

export interface TaskListSearchResultProps {
    index: number;
    item: Awaited<ReturnType<typeof serverClient.toDo.findListsByTaggables>>[number]
    totalFound: number
    // data: // get this type
}
