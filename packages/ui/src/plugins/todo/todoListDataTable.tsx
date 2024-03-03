"use client"
import { ToDoSearchParams } from '#/zod/local/todo'
import React, { useEffect, useMemo, useState } from 'react'
import {
    Column,
    ColumnDef,
    ColumnFiltersState,
    ExpandedState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "#/components/shad/ui/table"
import { Checkbox } from '#/components/shad/ui/checkbox'
import dayjs from 'dayjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Path, useForm } from 'react-hook-form'
import { TodoFilterFormSchema, todoFilterFormSchema } from './zod/general'
import { Form } from '#/components/shad/ui/form'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { DataTableColumnHeader } from './dataTableColumnHeader'
import { DataTableRowActions, statuses } from './dataTableRowActions'
import { fieldArrayIsSame, replaceSelfInArray } from '#/utils/plotting/arrayUtils'
import { DataTablePagination } from '#/components/util/tables/datatable/dataTablePagination'
import ToDoListDeleteButton from './toDoListDeleteButton'
import ToDoListTableToolBar from './todoListDataTableToolbar'
import { Record } from '@prisma/client/runtime/library'
import { DropdownOptionType } from '#/components/layout/uniqueLayouts/datatable/datatableFilterButton'
import ToDoListDataTableStatusCell from './todoListDataTableStatusCell'
import { ToDoListStatus } from '@prisma/client'
import { client } from '#/trpc/client'
import EditableDataTableDateCell from './editableDataTableDateCell'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import ToDoListDataTablePriorityCell from './todolistDataTablePriorityCell'
import { StarIcon } from 'lucide-react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import ToDoListDataTableListNameCell from './toDoListListNameCell'
import { toast } from '#/components/shad/ui/use-toast'
import { TodoTaskOutput } from '#/classes/prismaMdxRelations/zod/todo'
import SerializedMdxStringDisplay from '#/components/specificTypeDisplay/markdown/mdx/serializedMdxStringDisplay'
import Link from 'next/link'
import SubComponentHandler from './subComponentHandler'
dayjs.extend(advancedFormat)

export interface TaskListIds {
    label: string
    id: number
    active: boolean
}

interface ToDoListDataTableProps {
    searchParams: ToDoSearchParams
    items: TodoTaskOutput[]
    lists: TaskListIds[]
    activeLists: TaskListIds[]
    activeListIds: number[]
}

export type ToDoTableOutput = ToDoListDataTableProps["items"][number]

const initialVisibility = { id: false, bookmarked: false, todoListLabel: false }


/* NOTE: This is a decent source about creating a datatable with nested rows. Basically just wrap the component with a Shadcn 'Collapsable' component with an 'asChild' prop. That would need to be adjusted to a controlled component for this use case to avoid click overflow, but a really simple approach that seems to work well. Make one component for a row with children and use the original approach for those without children to avoid UI bugs from an empty collapsable container. */


const ids: Record<string, string> = {
    id: "id",
    actions: "actions",
    bookmarked: "bookmarked",
    select: "select",
    priority: "priority",
    status: "status",
    task: "task",
    dueAt: "dueAt",
    todoListLabel: "todoListLabel"
}


const stylesMap: { [k in keyof typeof ids]: string } = {
    actions: "w-[50px]",
    id: "w-12",
    bookmarked: "w-12",
    select: "w-12",
    priority: "w-[120px]",
    status: "w-[120px]",
    task: "max-w-full",
    dueAt: "w-[120px] min-w-[120px] max-w-[200px]",
    todoListLabel: "w-[200px] min-w-fit"
}


const getColumnDef = (items: ToDoListDataTableProps["items"], setItems: (newItems: ToDoListDataTableProps["items"]) => void, router: AppRouterInstance, multipleLists: boolean, lists: TaskListIds[]): ColumnDef<ToDoTableOutput>[] => {
    let itemMap: { [k: string]: (typeof items)[number] } = {}
    for (const k of items) {
        itemMap[k.id] = k
    }
    return [
        {
            id: ids.select,
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
            maxSize: 60
        },
        {
            id: ids.bookmarked,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Due" />
            },
            cell: ({ row }) => {
                return row.getValue(ids.bookmarked) ? <StarFilledIcon className={"color-primary"} /> : <StarIcon className={"color-primary"} />
            },
            enableSorting: false,
            /* enableHiding: false, */
            size: 50,
            minSize: 32,
            maxSize: 60

        },
        {
            header: "List Name",
            /* size: 60, */
            id: ids.todoListLabel,
            accessorKey: "ToDoList.label",
            size: 100,
            minSize: 32,
            maxSize: 250,
            cell: ({ row }) => <ToDoListDataTableListNameCell
                optionClasses="whitespace-nowrap"
                row={row}
                lists={lists}
                onChange={async (newListId) => {
                    let _id = row.getValue(ids.id) as string | number
                    const tskId = typeof _id === "number" ? _id : parseInt(_id)
                    console.log("tskId: ", tskId)
                    const newList = lists.find((l) => l.id === tskId)
                    console.log("newList: ", newList)
                    let res = await client.toDo.setToDoList.mutate({
                        listId: newListId,
                        taskId: tskId
                    })
                    if (res) {
                        if (newList) {
                            setItems(items.map((item) => item.id === tskId ? ({
                                ...item,
                                toDoListId: newListId,
                                ...(newList?.label && {
                                    ToDoList: {
                                        label: newList.label
                                    }
                                })
                            }) : item))
                        } else {
                            toast({
                                title: "Oh no.",
                                description: "Something went wrong. Please check the task that was recently changed."
                            })
                        }
                    }
                }}
            />
        },
        {
            accessorKey: "dueAt",
            id: ids.dueAt,
            size: 120,
            minSize: 90,
            maxSize: 180,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Due" />
            },
            cell: ({ row }) => {
                const d = row.getValue(ids.dueAt) as string
                let _id = row.getValue(ids.id) as string | number | undefined
                return (
                    <EditableDataTableDateCell value={d ? dayjs(d) : undefined} onValueChange={async (newDate) => {
                        if (!_id) return
                        let res = await client.toDo.setToDoDueDate.mutate({
                            taskIds: [typeof _id === "string" ? parseInt(_id) : _id],
                            dueAt: newDate
                        })
                        if (res) {
                            setItems(items.map((item: (typeof items)[number]) => {
                                return `${item.id}` === `${_id}` ? { ...item, dueAt: newDate } : item
                            }))
                        }
                    }}
                    />
                )
            }
        },
        {
            accessorKey: "id",
            id: ids.id,
            size: 30,
            minSize: 30,
            maxSize: 50,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Task" />

            },
            cell: ({ row }) => <div className={"max-w-fit"}>{row.getValue(ids.id)}</div>,
        },
        {
            accessorKey: "task",
            id: ids.task,
            /* enableResizing: true, */
            /* size: 540, */
            /* minSize: 200, */
            /* maxSize: 1080, */
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Task" />

            },
            cell: ({ row }) => {
                const itemId = row.getValue(ids.id)
                return (
                    <Link
                        href={`/todo/details/${itemId}`}
                        className={"truncate [&_p]:truncate font-medium [&_p]:block max-w-full [&_p]:max-w-full [&_p]:overflow-hidden block"}
                    >
                        <SerializedMdxStringDisplay
                            data={itemMap[String(itemId)]?.task}
                        />
                    </Link>

                )
            }
        },
        {
            accessorKey: "status",
            id: "status",
            size: 140,
            minSize: 90,
            maxSize: 200,
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Status" />
            },
            /* cell: ({ row }) => <div className={"w-fit"}>{row.getValue("status")}</div>, */
            cell: ({ row, table }) => {
                const currentStatus = row.getValue(ids.status) as string
                const curStatus = statuses.find(
                    (status) => status.value.toLowerCase() === currentStatus.toLowerCase()
                )
                return (
                    <ToDoListDataTableStatusCell icon={curStatus?.icon} label={curStatus?.label} value={currentStatus as ToDoListStatus} onValueChange={async (newVal: ToDoListStatus) => {
                        let _id = row.getValue(ids.id) as string | number
                        const status = statuses.find(
                            (status) => status.value.toLowerCase() === newVal.toLowerCase()
                        )
                        console.log("status: ", status)
                        if (!status) {
                            console.log(`No status was found for ${newVal}`)
                            return
                        }

                        let res = await client.toDo.setToDoStatus.mutate({
                            status: status.value,
                            taskIds: [typeof _id === "number" ? _id : parseInt(_id)]
                        })
                        console.log("res: ", res)
                        if (res) {
                            setItems(items.map((i) => i.id === row.getValue(ids.id) ? {
                                ...i,
                                status: status.value
                            } : i))
                        }
                    }
                    }
                    />
                )
            },
        },
        {
            accessorKey: "priority",
            id: ids.priority,
            size: 140,
            minSize: 90,
            maxSize: 200,
            /* size: 100, */
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Priority" />
            },
            cell: ({ row }) => {
                let p = row.getValue(ids.priority) as number
                if (typeof p === "string") {
                    p = parseInt(p)
                }
                return (
                    <ToDoListDataTablePriorityCell
                        label={`${p}` || "priority"}
                        value={p}
                        onValueChange={async (newVal) => {
                            const thisId = row.getValue(ids.id) as number
                            let res = await client.toDo.setToDoPriority.mutate({
                                taskIds: [thisId],
                                priority: newVal
                            })
                            if (res) {
                                setItems(items.map((item) => item.id === thisId ? ({
                                    ...item,
                                    priority: newVal
                                }) : item))
                            }
                        }}
                    />
                )
            },
        },
        {
            id: ids.actions,
            /* enableHiding: false, */
            size: 50,
            minSize: 40,
            maxSize: 60,
            /* size: 60, */
            header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" />,
            cell: ({ row }) => <DataTableRowActions
                onLabelChange={async (favoriteId, newLabel) => {
                    let newList = lists.find(l => l.label.toLowerCase() === newLabel?.toLowerCase())
                    if (!favoriteId || !newList) return
                    const res = await client.toDo.setToDoList.mutate({
                        taskId: favoriteId,
                        listId: newList.id
                    })
                    if (res) {
                        replaceSelfInArray<(typeof items)[number], number>(items, favoriteId, (a) => a.id, (old) => ({
                            ...old,
                            toDoListId: newList?.id,
                            ...(newList?.label && {
                                ToDoList: {
                                    label: newList.label
                                }
                            })
                        }))
                    }
                }}
                onFavorite={async (favoriteId, shouldBookmark) => {
                    if (!favoriteId) return
                    const res = await client.toDo.toggleToDoBookmark.mutate({
                        taskId: favoriteId,
                        shouldBookmark
                    })
                    if (res) {
                        replaceSelfInArray<(typeof items)[number], number>(items, favoriteId, (a) => a.id, (old) => ({
                            ...old,
                            bookmarked: Boolean(shouldBookmark)
                        }))
                    }
                }}

                onDelete={async (deleteId) => {
                    if (!deleteId) return
                    const res = await client.toDo.deleteTaskByIds.mutate([deleteId])
                    if (res) {
                        setItems(items.filter((a) => a.id !== deleteId))
                    }
                }}
                row={row}
            />,
        }
    ] satisfies ColumnDef<ToDoTableOutput>[]
}




const ToDoListDataTable = ({ items: _items = [], searchParams, lists, activeLists, activeListIds }: ToDoListDataTableProps) => {
    const vp = useViewport()
    const [items, setItems] = useState(_items)
    const router = useRouter()
    const [sorting, setSorting] = useState<SortingState>([{
        desc: true,
        id: "priority"
    }])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [expanded, setExpanded] = React.useState<ExpandedState>({})
    /* TODO: Move this columnSizeVars state into a useMemo hook instead and move the table body to a memoized component to improve performance. */
    const [columnSizeVars, setColSizes] = useState<{ [key: string]: number }>({})
    const [rowSelection, setRowSelection] = useState({})
    const [visibilityState, setVisibilityState] = useState<Record<string, boolean>>(initialVisibility)
    const columns = useMemo(() => getColumnDef(items, setItems, router, activeLists.length > 1, lists), [items])

    useEffect(() => {
        if (!vp) return
        setVisibilityState({
            id: false,
            bookmarked: false,
            todoListLabel: false,
            priority: vp.width > 900,
            status: vp.width > 850
        })
    }, [vp])


    const setNavStateFromSelected = () => {
        const status = fieldArrayIsSame<ToDoTableOutput, "status">(table.getFilteredSelectedRowModel().rows, "status")
        if (status) {
            form.setValue("status", status)
        }
    }

    useEffect(() => {
        setNavStateFromSelected()
    }, [rowSelection])


    /* TODO: Figure out what columnsizing is fit to a table that is 100vw wide, and the onColumnSizingChange method doesn't get called on resize. */
    const table = useReactTable<ToDoTableOutput>({
        data: items,
        columns: columns,
        /* enableColumnResizing: true, */
        state: {
            columnVisibility: visibilityState,
            sorting,
            columnFilters,
            rowSelection,
            expanded
        },
        /* columnResizeMode: 'onChange', */
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setVisibilityState,
        onRowSelectionChange: setRowSelection,
        onColumnSizingChange: setColSizes,
        /* onColumnSizingChange: (colState) => { */
        /*     colState */
        /*     const headers = table.getFlatHeaders() */
        /*     const _colSizes: { [key: string]: number } = {} */
        /*     for (let i = 0; i < headers.length; i++) { */
        /*         const header = headers[i]! */
        /*         _colSizes[`--header-${header.id}-size`] = header.getSize() */
        /*         _colSizes[`--col-${header.column.id}-size`] = header.column.getSize() */
        /*     } */
        /*     setColSizes(_colSizes) */
        /* }, */
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
        defaultColumn: {
            minSize: 0,
        }
    })



    const form = useForm<TodoFilterFormSchema>({
        resolver: zodResolver(todoFilterFormSchema),
        defaultValues: {
            priority: undefined,
            status: undefined,
            listNames: {}
        }
    })


    const setNewPriorityValues = async (ids: number[], priorityValue: string | number) => {
        let res = await client.toDo.setToDoPriority.mutate({
            taskIds: ids,
            priority: typeof priorityValue === "string" ? parseInt(priorityValue) : priorityValue
        })
        if (res) {
            setItems(items.map((item) => ids.includes(item.id) ? {
                ...item,
                priority: parseInt(priorityValue as string)
            } : item))
        }
    }

    const priorityValue = form.watch("priority" as Path<TodoFilterFormSchema>)

    useEffect(() => {
        if (priorityValue && selectedIds.length) {
            setNewPriorityValues(selectedIds, priorityValue as number)
        }
    }, [priorityValue])

    const getListNames = (listnames: TaskListIds[], activeListIds?: number[], activeListNames?: string[]) => {
        let o: Record<string, boolean> = {}
        listnames.forEach((l, i) => {
            o[l.id] = i === 0 ? true : Boolean((activeListIds && activeListIds.includes(l.id)) || (activeListNames && activeListNames.includes(l.label)))
        })
        return o
    }

    useEffect(() => {
        form.setValue("listNames", getListNames(lists, searchParams.listIds, searchParams.listNames))
    }, [searchParams, lists])


    const getSelected = () => {
        return table.getFilteredSelectedRowModel().rows
    }

    const onRemove = (ids: number[]) => {
        setItems(_items.filter((i) => !ids.includes(i.id)))
        table.resetRowSelection()
    }

    useEffect(() => {
        setItems(_items)
    }, [_items])

    const selectedIds = getSelected().map((r) => r.getValue(ids.id)) as number[]
    const selectedValues = selectedIds.map((s) => {
        let v = items.find((i) => i.id === s)
        if (v) {
            return {
                name: `${v.id}`,
                label: v.id
            } satisfies DropdownOptionType
        }
    }).filter((a) => a?.name) as DropdownOptionType[]


    return (
        <div className="rounded-md border mt-8 no-scrollbar-all max-w-full overflow-x-auto">
            <ToDoListDeleteButton onRemove={onRemove} selectedIds={getSelected().map((s) => parseInt(s.getValue(ids.id))) as number[]} />
            <Form {...form}>
                <ToDoListTableToolBar
                    table={table}
                    listNames={lists}
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                    selectedIds={selectedIds}
                    selectedValues={selectedValues}
                    searchParams={searchParams}
                    activeLists={activeLists}
                    currentListIds={activeListIds}
                />
                <Table
                    className={"w-full"}
                    style={{
                        ...columnSizeVars,
                        /* width: totalSize */
                    }}
                >
                    <TableHeader
                    >
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead
                                            key={header.id}
                                            className={stylesMap[header.column.id]}
                                        /* style={{ */
                                        /*     width: `calc(var(--header-${header?.id}-size) * ${sizeScalar}px)`, */
                                        /* }} */
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <>
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                className={stylesMap[cell.column.id]}
                                                key={cell.id}
                                            /* style={{ */
                                            /*     width: `calc(var(--col-${cell.column.id}-size) * ${sizeScalar}px)`, */
                                            /* }} */
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    {row.getIsExpanded() && (
                                        <tr
                                            key={row.id}
                                        >
                                            {/* 2nd row is a custom 1 cell row */}
                                            <td colSpan={row.getVisibleCells().length}>
                                                <SubComponentHandler row={row} />
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))
                        ) : (
                            <TableRow
                            >
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <DataTablePagination table={table} />
            </Form >
        </div>
    )
}


ToDoListDataTable.displayName = "ToDoListDataTable"


export default ToDoListDataTable;
