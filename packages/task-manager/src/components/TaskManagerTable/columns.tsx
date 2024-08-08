import { tableIds, taskStatuses } from "./staticData";
import {
    TaskListIds,
    TaskManagerTableProps,
    ToDoTableOutput,
} from "../../types";
import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { client } from "@ulld/api/client";
import { ToDoListStatus } from "@ulld/utilities/toDoStatusData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@ulld/tailwind/checkbox";
import { DataTableColumnHeader } from "./columnHeader";
import { ToDoListDataTablePriorityCell } from "./priorityCell";
import { DataTableRowActions } from "./rowActions";
import { EditableDataTableDateCell } from "./editDateCell";
import { ToDoListDataTableStatusCell } from "./statusCell";
import { MdxContentCLIENT } from "@ulld/render/mdx";
import { ToDoListDataTableListNameCell } from "./nameCell";
import { toast } from "@ulld/tailwind/use-toast";
import dayjs from "dayjs";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";

export const getTaskListColumnDef = (
    items: TaskManagerTableProps["items"],
    setItems: (newItems: TaskManagerTableProps["items"]) => void,
    router: AppRouterInstance,
    multipleLists: boolean,
    lists: TaskListIds[],
): ColumnDef<ToDoTableOutput>[] => {
    let itemMap: { [k: string]: (typeof items)[number] } = {};
    for (const k of items) {
        itemMap[k.id] = k;
    }
    return [
        {
            id: tableIds.select,
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            /* enableHiding: false, */
            size: 50,
            minSize: 32,
            maxSize: 60,
        },
        {
            id: tableIds.bookmarked,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Due" />;
            },
            cell: ({ row }) => {
                return row.getValue(tableIds.bookmarked) ? (
                    <StarFilledIcon className={"color-primary"} />
                ) : (
                    <StarIcon className={"color-primary"} />
                );
            },
            enableSorting: false,
            /* enableHiding: false, */
            size: 50,
            minSize: 32,
            maxSize: 60,
        },
        {
            header: "List Name",
            /* size: 60, */
            id: tableIds.todoListLabel,
            accessorKey: "ToDoList.label",
            size: 100,
            minSize: 32,
            maxSize: 250,
            cell: ({ row }) => (
                <ToDoListDataTableListNameCell
                    classes={{option: "whitespace-nowrap"}}
                    row={row}
                    lists={lists}
                    name="listNames"
                    label="List"
                    onChange={async (newListId) => {
                        let _id = row.getValue(tableIds.id) as string | number;
                        const tskId = typeof _id === "number" ? _id : parseInt(_id);
                        const newList = lists.find((l) => l.id === tskId);
                        let res = await client.toDo.setToDoList.mutate({
                            listId: newListId,
                            taskId: tskId,
                        });
                        if (res) {
                            if (newList) {
                                setItems(
                                    items.map((item) =>
                                        item.id === tskId
                                            ? {
                                                ...item,
                                                toDoListId: newListId,
                                                ...(newList?.label && {
                                                    ToDoList: {
                                                        label: newList.label,
                                                    },
                                                }),
                                            }
                                            : item,
                                    ),
                                );
                            } else {
                                toast({
                                    title: "Oh no.",
                                    description:
                                        "Something went wrong. Please check the task that was recently changed.",
                                });
                            }
                        }
                    }}
                />
            ),
        },
        {
            accessorKey: "dueAt",
            id: tableIds.dueAt,
            size: 120,
            minSize: 90,
            maxSize: 180,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Due" />;
            },
            cell: ({ row }) => {
                const d = row.getValue(tableIds.dueAt) as string;
                let _id = row.getValue(tableIds.id) as string | number | undefined;
                return (
                    <EditableDataTableDateCell
                        value={d ? dayjs(d) : undefined}
                        onValueChange={async (newDate) => {
                            if (!_id) return;
                            let res = await client.toDo.setToDoDueDate.mutate({
                                taskIds: [typeof _id === "string" ? parseInt(_id) : _id],
                                dueAt: newDate,
                            });
                            if (res) {
                                setItems(
                                    items.map((item: (typeof items)[number]) => {
                                        return `${item.id}` === `${_id}`
                                            ? { ...item, dueAt: newDate }
                                            : item;
                                    }),
                                );
                            }
                        }}
                    />
                );
            },
        },
        {
            accessorKey: "id",
            id: tableIds.id,
            size: 30,
            minSize: 30,
            maxSize: 50,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Task" />;
            },
            cell: ({ row }) => (
                <div className={"max-w-fit"}>{row.getValue(tableIds.id)}</div>
            ),
        },
        {
            accessorKey: "task",
            id: tableIds.task,
            /* enableResizing: true, */
            /* size: 540, */
            /* minSize: 200, */
            /* maxSize: 1080, */
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Task" />;
            },
            cell: ({ row }) => {
                const itemId = row.getValue(tableIds.id);

                return (
                    <div
                        className={
                            "truncate [&_p]:truncate font-medium [&_p]:block max-w-full [&_p]:max-w-full [&_p]:overflow-hidden block cursor-pointer"
                        }
                        onClick={() => {
                            router.push(`/todo/details/${itemId}`);
                        }}
                    >
                        <MdxContentCLIENT inline content={itemMap[String(itemId)]?.task} />
                    </div>
                );
            },
        },
        {
            accessorKey: "status",
            id: "status",
            size: 140,
            minSize: 90,
            maxSize: 200,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Status" />;
            },
            cell: ({ row, table }) => {
                const currentStatus = row.getValue(tableIds.status) as string;
                const curStatus = taskStatuses.find(
                    (status) =>
                        status.value.toLowerCase() === currentStatus.toLowerCase(),
                );
                return (
                    <ToDoListDataTableStatusCell
                        icon={curStatus?.icon}
                        label={curStatus?.label}
                        value={currentStatus as ToDoListStatus}
                        onValueChange={async (newVal: ToDoListStatus) => {
                            let _id = row.getValue(tableIds.id) as string | number;
                            const status = taskStatuses.find(
                                (status) => status.value.toLowerCase() === newVal.toLowerCase(),
                            );
                            if (!status) {
                                console.log(`No status was found for ${newVal}`);
                                return;
                            }

                            let res = await client.toDo.setToDoStatus.mutate({
                                status: status.value,
                                taskIds: [typeof _id === "number" ? _id : parseInt(_id)],
                            });
                            if (res) {
                                setItems(
                                    items.map((i) =>
                                        i.id === row.getValue(tableIds.id)
                                            ? {
                                                ...i,
                                                status: status.value,
                                            }
                                            : i,
                                    ),
                                );
                            }
                        }}
                    />
                );
            },
        },
        {
            accessorKey: "priority",
            id: tableIds.priority,
            size: 140,
            minSize: 90,
            maxSize: 200,
            /* size: 100, */
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Priority" />;
            },
            cell: ({ row }) => {
                let p = row.getValue(tableIds.priority) as number;
                if (typeof p === "string") {
                    p = parseInt(p);
                }
                return (
                    <ToDoListDataTablePriorityCell
                        label={`${p}` || "priority"}
                        value={p}
                        onValueChange={async (newVal) => {
                            const thisId = row.getValue(tableIds.id) as number;
                            let res = await client.toDo.setToDoPriority.mutate({
                                taskIds: [thisId],
                                priority: newVal,
                            });
                            if (res) {
                                setItems(
                                    items.map((item) =>
                                        item.id === thisId
                                            ? {
                                                ...item,
                                                priority: newVal,
                                            }
                                            : item,
                                    ),
                                );
                            }
                        }}
                    />
                );
            },
        },
        {
            id: tableIds.actions,
            /* enableHiding: false, */
            size: 50,
            minSize: 40,
            maxSize: 60,
            /* size: 60, */
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Actions" />
            ),
            cell: ({ row }) => (
                <DataTableRowActions
                    onLabelChange={async (favoriteId, newLabel) => {
                        let newList = lists.find(
                            (l) => l.label.toLowerCase() === newLabel?.toLowerCase(),
                        );
                        if (!favoriteId || !newList) return;
                        const res = await client.toDo.setToDoList.mutate({
                            taskId: favoriteId,
                            listId: newList.id,
                        });
                        if (res) {
                            ArrayUtilities.replaceSelfInArray<(typeof items)[number], number>(
                                items,
                                favoriteId,
                                (a) => a.id,
                                (old) => ({
                                    ...old,
                                    toDoListId: newList?.id,
                                    ...(newList?.label && {
                                        ToDoList: {
                                            label: newList.label,
                                        },
                                    }),
                                }),
                            );
                        }
                    }}
                    onFavorite={async (favoriteId, shouldBookmark) => {
                        if (!favoriteId) return;
                        const res = await client.toDo.toggleToDoBookmark.mutate({
                            taskId: favoriteId,
                            shouldBookmark,
                        });
                        if (res) {
                            ArrayUtilities.replaceSelfInArray<(typeof items)[number], number>(
                                items,
                                favoriteId,
                                (a) => a.id,
                                (old) => ({
                                    ...old,
                                    bookmarked: Boolean(shouldBookmark),
                                }),
                            );
                        }
                    }}
                    onDelete={async (deleteId) => {
                        if (!deleteId) return;
                        const res = await client.toDo.deleteTaskByIds.mutate([deleteId]);
                        if (res) {
                            setItems(items.filter((a) => a.id !== deleteId));
                        }
                    }}
                    row={row}
                />
            ),
        },
    ] satisfies ColumnDef<ToDoTableOutput>[];
};
