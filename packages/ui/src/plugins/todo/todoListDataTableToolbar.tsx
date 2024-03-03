import FullFormProvider from '#/components/layout/uniqueLayouts/fullForm/FullFormProvider'
import { Button } from '#/components/shad/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '#/components/shad/ui/dropdown-menu'
import { Input } from '#/components/shad/ui/input'
import {
    ColumnFiltersState,
    CoreColumn,
    Table as TableType
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { ChevronDown, DiffIcon, ListTodoIcon } from 'lucide-react'
import React from 'react'
import ToDoListPrioritySelect from './ToDoListPrioritySelect'
import ToDoListStatusSelect from './ToDoListStatusSelect'
import { TaskListIds, ToDoTableOutput } from './todoListDataTable'
import { useViewport } from '#/hooks/useViewport'
import clsx from 'clsx'
import DataTableDropdownCheckboxListInput, { DropdownOptionType } from '#/components/layout/uniqueLayouts/datatable/datatableFilterButton'
import { useRouter } from 'next/navigation'
import { FieldValues, Path, PathValue, useForm } from 'react-hook-form'
import { formatSearchAllParams } from '#/lib/formatting/formatSearchAllParams'
import { toggleItemInArray } from '#/utils/plotting/arrayUtils'
import { ToDoSearchParamInput, ToDoSearchParams } from '#/zod/local/todo'
import { TodoTaskOutput } from '#/classes/prismaMdxRelations/zod/todo'


dayjs.extend(advancedFormat)


interface ToDoListTableToolBarProps {
    table: TableType<ToDoTableOutput>
    listNames: TaskListIds[]
    columnFilters: ColumnFiltersState
    setColumnFilters: (filters: ColumnFiltersState) => void
    selectedIds: number[]
    selectedValues: DropdownOptionType[]
    searchParams: ToDoSearchParams
    activeLists: TaskListIds[]
    currentListIds: number[]
}

const replaceMap: Record<CoreColumn<TodoTaskOutput, unknown>["id"], string> = {
    TodoListLabel: "List Name",
    DueAt: "Due"
}



const ToDoListTableToolBar = <T extends FieldValues>({ table, listNames, selectedIds, columnFilters, setColumnFilters, selectedValues, activeLists, searchParams, currentListIds, ...props }: ToDoListTableToolBarProps) => {


    const activeIds = activeLists.map((a) => a.id)
    const vw = useViewport()?.width
    const router = useRouter()
    const form = useForm<T>()

    let hideSep = false
    if (vw) {
        switch (true) {
            case vw < 1225: {
                hideSep = true
                break
            }
        }
    }


    let p: string[] = form.watch("priority" as Path<T>)

    if (Array.isArray(p)) {
        p = p.map((l) => `${l}`)
    }


    const togglePriorityFilter = (item: DropdownOptionType) => {
        console.log("item in togglePriorityFilter ", item)
        if (item.id) {
            let newArr = toggleItemInArray<number>(form.getValues("priority" as Path<T>) || [], item.id)
            form.setValue("priority" as Path<T>, newArr as PathValue<T, Path<T>>)
        }
    }





    return (
        <div className={clsx("w-full flex flex-col extraMedium:flex-row  gap-4 p-4", hideSep && "hideSeperator")}>
            <Input
                placeholder={`Filter tasks...`}
                value={(table.getColumn("task")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                    table.getColumn("task")?.setFilterValue(event.target.value)
                }
                className="w-full extraMedium:w-[400px] extraMedium:max-w-[400px] min-w-[200px]"
            />
            <div className={"w-full flex flex-row gap-4 justify-center items-center"}>
                <FullFormProvider initialValues={{}}>
                    <ToDoListPrioritySelect
                        column={table.getColumn("priority") as any}
                        label="Priority"
                        name="priority"
                        searchParams={searchParams}
                        selectedIds={selectedIds}
                        icon={DiffIcon}
                        toggle={togglePriorityFilter}
                        activePriorities={p || []}
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                    />
                    <ToDoListStatusSelect
                        column={table.getColumn("status") as any}
                        label="Status"
                        name="status"
                        searchParams={searchParams}
                        selectedIds={selectedIds}
                        table={table}
                        columnFilters={columnFilters}
                        setColumnFilters={setColumnFilters}
                    />
                </FullFormProvider>
                <div className={"hidden extraMedium:inline-block extraMedium:flex-grow"} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto min-w-fit">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id in replaceMap ? replaceMap[column.id] : column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DataTableDropdownCheckboxListInput
                    table={table}
                    label="List"
                    selectedIds={currentListIds || searchParams.listIds || []}
                    /* name={"listName"} */
                    options={listNames.map(l => ({
                        name: `${l.id}`,
                        id: l.id,
                        label: l.label,
                        active: activeIds.includes(l.id)
                    }))}
                    searchParams={searchParams}
                    icon={ListTodoIcon}
                    toggle={(item: DropdownOptionType) => {
                        const itemId = item.id as number
                        if (!itemId) return console.log(`No item.id was found for `, item)
                        const _newListIds = toggleItemInArray(currentListIds, itemId)
                        console.log("_newListIds: ", _newListIds)
                        if (!itemId) return console.error("No listName id was found in the todoListDataTableToolbar component")
                        if (!_newListIds.length) return
                        router.push(`/todo?${formatSearchAllParams<ToDoSearchParamInput>({
                            ...searchParams,
                            listIds: _newListIds
                        })}`)
                    }}
                    placeholder={"List"}
                />
            </div>
        </div>
    )
}


ToDoListTableToolBar.displayName = "ToDoListTableToolBar"


export default ToDoListTableToolBar;
