import { Provider as FullFormProvider } from "@ulld/full-form/provider";
import { Button } from "@ulld/tailwind/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@ulld/tailwind/dropdown-menu";
import { Input } from "@ulld/tailwind/input";
import {
    ColumnFiltersState,
    CoreColumn,
    Table as TableType,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { ChevronDown, DiffIcon, ListTodoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ToDoListPrioritySelect from "../prioritySelect";
import ToDoListStatusSelect from "../statusSelect";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FieldValues, Path, PathValue, useForm } from "react-hook-form";
import {
    ToDoSearchParams,
    TodoTaskOutput,
    ToDoSearchParamInput,
} from "@ulld/parsers/plugins/todos";
import { formatSearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import { TaskListIds } from "@ulld/utilities/types";
import { ToDoTableOutput, DropdownOptionType } from "../../../types";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { DataTableDropdownCheckboxListInput } from "../dataTableDropdownCheckboxListInput";

dayjs.extend(advancedFormat);

interface ToDoListTableToolBarProps {
    table: TableType<ToDoTableOutput>;
    listNames: TaskListIds[];
    columnFilters: ColumnFiltersState;
    setColumnFilters: (filters: ColumnFiltersState) => void;
    selectedIds: number[];
    selectedValues: DropdownOptionType[];
    searchParams: ToDoSearchParams;
    activeLists: TaskListIds[];
    currentListIds: number[];
}

const replaceMap: Record<CoreColumn<TodoTaskOutput, unknown>["id"], string> = {
    TodoListLabel: "List Name",
    DueAt: "Due",
};

export const ToDoListTableToolBar = <T extends FieldValues>({
    table,
    listNames,
    selectedIds,
    columnFilters,
    setColumnFilters,
    selectedValues,
    activeLists,
    searchParams,
    currentListIds,
    ...props
}: ToDoListTableToolBarProps) => {
    const activeIds = activeLists.map((a) => a.id);
    const router = useRouter();
    const form = useForm<T>();
    const [hideSep, setHideSep] = useState(false);

    const handleViewport = () => {
        setHideSep(window.innerWidth < 1225);
    };

    useEffect(() => {
        handleViewport();
        window.addEventListener("resize", handleViewport);
        return () => window.removeEventListener("resize", handleViewport);
    }, []);

    let p: string[] = form.watch("priority" as Path<T>);

    if (Array.isArray(p)) {
        p = p.map((l) => `${l}`);
    }

    const togglePriorityFilter = (item: DropdownOptionType) => {
        if (item.id) {
            let newArr = ArrayUtilities.toggleItemInArray<number>(
                form.getValues("priority" as Path<T>) || [],
                item.id,
            );
            form.setValue("priority" as Path<T>, newArr as PathValue<T, Path<T>>);
        }
    };

    return (
        <div
            className={clsx(
                "w-full flex flex-col extraMedium:flex-row  gap-4 p-4",
                hideSep && "hideSeperator",
            )}
        >
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
                        hideAddListButton
                        setColumnFilters={setColumnFilters}
                    />
                </FullFormProvider>
                <div
                    className={"hidden extraMedium:inline-block extraMedium:flex-grow"}
                />
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
                                        {column.id in replaceMap
                                            ? replaceMap[column.id]
                                            : column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DataTableDropdownCheckboxListInput
                    table={table}
                    label="List"
                    selectedIds={currentListIds || searchParams.listIds || []}
                    /* name={"listName"} */
                    options={listNames.map((l) => ({
                        name: `${l.id}`,
                        id: l.id,
                        label: l.label,
                        active: activeIds.includes(l.id),
                    }))}
                    searchParams={searchParams}
                    icon={ListTodoIcon}
                    toggle={(item: DropdownOptionType) => {
                        const itemId = item.id as number;
                        if (!itemId) return console.log(`No item.id was found for `, item);
                        const _newListIds = ArrayUtilities.toggleItemInArray(currentListIds, itemId);
                        if (!itemId)
                            return console.error(
                                "No listName id was found in the todoListDataTableToolbar component",
                            );
                        if (!_newListIds.length) return;
                        router.push(
                            `/todo?${formatSearchAllParams<ToDoSearchParamInput>({
                                ...searchParams,
                                listIds: _newListIds,
                            })}`,
                        );
                    }}
                    placeholder={"List"}
                />
            </div>
        </div>
    );
};

ToDoListTableToolBar.displayName = "ToDoListTableToolBar";
