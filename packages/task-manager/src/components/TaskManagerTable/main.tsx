"use client"
import React, { useEffect, useMemo, useState } from "react";
import {
  ColumnFiltersState,
  ExpandedState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ulld/tailwind/table";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver} from "@ulld/full-form/form"
import { useRouter } from "next/navigation";
import { getTaskListColumnDef } from "./columns";
import {
  DropdownOptionType,
  TaskListIds,
  TaskManagerTableProps,
  ToDoTableOutput,
} from "../../types";
import { client } from "@ulld/api/client";
import {
  TodoFilterFormSchema,
  todoFilterFormSchema,
} from "@ulld/api/plugins/native/todo/zod/general";
import { headerStylesMap, initialTableVisibility, stylesMap, tableIds } from "./staticData";
import { SubComponentHandler } from "./subComponentHandler";
import { DataTablePagination } from "./tablePagination";
import { ToDoListDeleteButton } from "./deleteButton";
import { ToDoListHideCompletedButton } from "./hideCompleteButton";
import { Path } from "react-hook-form";
import { ToDoListTableToolBar } from "./toolbar/main";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";

const TaskManagerTable = ({
  items: _items = [],
  searchParams,
  lists,
  activeLists,
  activeListIds,
}: TaskManagerTableProps) => {
  const [items, _setItems] = useState(_items);
  const [allItems, setAllItems] = useState(_items);
  const router = useRouter();
  const [sorting, setSorting] = useState<SortingState>([
    {
      desc: true,
      id: "priority",
    },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [showingHidden, setShowingHidden] = useState(false);
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  /* TODO: Move this columnSizeVars state into a useMemo hook instead and move the table body to a memoized component to improve performance. */
  const [columnSizeVars, setColSizes] = useState<{ [key: string]: number }>({});
  const [rowSelection, setRowSelection] = useState({});
  const [visibilityState, setVisibilityState] = useState<
    Record<string, boolean>
  >(initialTableVisibility);
  const setItems = (val: typeof items) => {
    _setItems(showingHidden ? val : val.filter((a) => a.status !== "Done"));
  };
  const columns = useMemo(
    () =>
      getTaskListColumnDef(
        items,
        setItems,
        router,
        activeLists.length > 1,
        lists,
      ),
    [items],
  );

  const handleViewport = () => {
    setVisibilityState({
      id: false,
      bookmarked: false,
      todoListLabel: false,
      priority: window.innerWidth > 900,
      status: window.innerWidth > 850,
    });
  };

  useEffect(() => {
    handleViewport();
    window.addEventListener("resize", handleViewport);
    return () => window.removeEventListener("resize", handleViewport);
  }, []);

  const setNavStateFromSelected = () => {
    const status = ArrayUtilities.fieldArrayIsSame<ToDoTableOutput, "status">(
      table.getFilteredSelectedRowModel().rows,
      "status",
    );
    if (status) {
      form.setValue("status", status);
    }
  };

  useEffect(() => {
    setNavStateFromSelected();
  }, [rowSelection]);

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
      expanded,
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
    },
  });

  const form = useForm<TodoFilterFormSchema>({
    resolver: zodResolver(todoFilterFormSchema),
    defaultValues: {
      priority: undefined,
      status: undefined,
      listNames: {},
    },
  });

  const setNewPriorityValues = async (
    ids: number[],
    priorityValue: string | number,
  ) => {
    let res = await client.toDo.setToDoPriority.mutate({
      taskIds: ids,
      priority:
        typeof priorityValue === "string"
          ? parseInt(priorityValue)
          : priorityValue,
    });
    if (res) {
      setItems(
        items.map((item) =>
          ids.includes(item.id)
            ? {
                ...item,
                priority: parseInt(priorityValue as string),
              }
            : item,
        ),
      );
    }
  };

  const priorityValue = form.watch("priority" as Path<TodoFilterFormSchema>);

  useEffect(() => {
    if (priorityValue && selectedIds.length) {
      setNewPriorityValues(selectedIds, priorityValue as number);
    }
  }, [priorityValue]);

  const getListNames = (
    listnames: TaskListIds[],
    activeListIds?: number[],
    activeListNames?: string[],
  ) => {
    let o: Record<string, boolean> = {};
    listnames.forEach((l, i) => {
      o[l.id] =
        i === 0
          ? true
          : Boolean(
              (activeListIds && activeListIds.includes(l.id)) ||
                (activeListNames && activeListNames.includes(l.label)),
            );
    });
    return o;
  };

  useEffect(() => {
    form.setValue(
      "listNames",
      getListNames(lists, searchParams.listIds, searchParams.listNames),
    );
  }, [searchParams, lists]);

  const getSelected = () => {
    return table.getFilteredSelectedRowModel().rows;
  };

  const archiveItems = async (ids: number[]) => {
    return await client.toDo.archiveTasks.mutate(ids);
  };

  const onRemove = async (ids: number[]) => {
    await archiveItems(ids);
    setItems(_items.filter((i) => !ids.includes(i.id)));
    table.resetRowSelection();
  };

  useEffect(() => {
    setItems(_items);
  }, [_items]);

  const selectedIds = getSelected().map((r) => r.getValue(tableIds.id)) as number[];
  const selectedValues = selectedIds
    .map((s) => {
      let v = items.find((i) => i.id === s);
      if (v) {
        return {
          name: `${v.id}`,
          label: v.id,
        } satisfies DropdownOptionType;
      }
    })
    .filter((a) => a?.name) as DropdownOptionType[];

  return (
    <div className="rounded-md border mt-8 no-scrollbar-all max-w-full overflow-x-auto">
      <ToDoListDeleteButton onRemove={onRemove} selectedIds={selectedIds} />
      <ToDoListHideCompletedButton
        show={!selectedIds.length}
        toggleHidden={() => {
          setItems(
            showingHidden ? allItems : items.filter((a) => a.status !== "Done"),
          );
          setShowingHidden(!showingHidden);
        }}
        showingHidden={showingHidden}
      />
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
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={headerStylesMap[header.column.id]}
                      /* style={{ */
                      /*     width: `calc(var(--header-${header?.id}-size) * ${sizeScalar}px)`, */
                      /* }} */
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <tr key={row.id}>
                      {/* 2nd row is a custom 1 cell row */}
                      <td colSpan={row.getVisibleCells().length}>
                        <SubComponentHandler row={row} />
                      </td>
                    </tr>
                  )}
                </>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
      </Form>
    </div>
  );
};

TaskManagerTable.displayName = "TaskManagerTable";

export default TaskManagerTable;
