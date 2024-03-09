"use client"
import React, { useState, useMemo } from "react"
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ChevronDown } from "lucide-react"
import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    Input,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,

} from "@ulld/tailwind/base"
import { getValueSearchTableColumns } from "./columns"
import { DocTypes } from "@ulld/configschema"
import { numberInputOnly } from "@ulld/state"
import { useDebounce } from "../../../../hooks"


export interface ValueSearchTableItem {
    href: string
    title: string
    rootRelativePath: string
    noteType: DocTypes | "none"
    importantValues: number[]
    firstSync: Date | null
    lastSync: Date | null
}

interface Props {
    items: ValueSearchTableItem[]
    decimalPlaces?: number
    defaultValue?: number
    timeout: number
}


const ValueSearchDataTable = ({ items, decimalPlaces, defaultValue, timeout }: Props) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [searchValue, setSearchValue] = useState(defaultValue ? `${defaultValue}` : "")

    const setSortByValue = () => {
        setSorting([...sorting, {
            desc: false,
            id: "importantValues"
        }])
    }

    const { value: inputValue, setValue: setInputValue } = useDebounce(defaultValue ? `${defaultValue}` : "", 500, (v: string) => setSearchValue(v))

    const valueSearchTableColumns = useMemo(() => {
        let vals = getValueSearchTableColumns(searchValue === "" ? null : parseFloat(searchValue), decimalPlaces)
        setSortByValue()
        return vals
    }, [decimalPlaces, searchValue])


    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )

    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
        firstSync: false,
        lastSync: false,
        href: false
    })

    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data: items,
        columns: valueSearchTableColumns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Sort by value"
                    value={inputValue ? `${inputValue}` : ""}
                    /* type="number" */
                    onKeyDown={(e) => numberInputOnly(e, false, null)}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
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
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
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
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={valueSearchTableColumns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ValueSearchDataTable
