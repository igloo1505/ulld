"use client"
import { SortingState, ColumnFiltersState, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { getAutoSettingColumnDef } from './autoSettingTableColumns'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    Command,
    CommandInput,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    Button,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Table,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    Label
} from "@ulld/tailwind/base"
import clsx from 'clsx'
import {
    CheckIcon, ChevronDown, ChevronsUpDown
} from 'lucide-react'
import { AutoSettingType, autoSetting } from '@ulld/api'
import { cn } from '../../../../utilityFunctions'



interface AutoSettingDataTableProps {
    settings: AutoSettingType[]
    setOpen: (b: boolean) => void
    removeSettingById: (id: number) => void
}


const autoSettingLabelMap: { [k in autoSetting]: string } & { all: "All" } = {
    topic: "Topic",
    tag: "Tag",
    subject: "Subject",
    all: "All"
}


const AutoSettingDataTable = ({ settings, removeSettingById, setOpen: setModalOpen }: AutoSettingDataTableProps) => {
    const router = useRouter()
    const [sorting, setSorting] = useState<SortingState>([])
    const [open, setOpen] = React.useState(false)
    const [filterValue, setFilterValue] = React.useState("")
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [rowSelection, setRowSelection] = useState({})
    const [visibilityState, setVisibilityState] = useState<Record<string, boolean>>({
        id: false
    })

    const columns = useMemo(() => getAutoSettingColumnDef(router, removeSettingById), [])

    const table = useReactTable<AutoSettingType>({
        data: settings,
        columns: columns,
        state: {
            columnVisibility: visibilityState,
            sorting,
            columnFilters,
            rowSelection,
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setVisibilityState,
        onRowSelectionChange: setRowSelection,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    })


    useEffect(() => {
        if (filterValue in autoSettingLabelMap) {
            filterValue === "all" ? table.setColumnFilters([
            ]) : table.setColumnFilters([
                {
                    id: "type",
                    value: filterValue
                }
            ])
        }
    }, [filterValue])


    const handleDelete = (e: any) => {
        console.log("e: ", e)
    }

    const sKeys = Object.keys(autoSettingLabelMap)

    return (
        <div className="rounded-md border mt-8">
            <div className="flex flex-row justify-between items-end p-4">
                <div className={"flex flex-row justify-center items-center mx-4"}>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <div className={"flex flex-col justify-center items-start gap-2"}>
                                <Label>Type</Label>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-[200px] justify-between"
                                >
                                    {filterValue
                                        ? sKeys.find((item) => item.toLowerCase() === filterValue)
                                        : "Select type..."
                                    }
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search type..." />
                                <CommandEmpty>No Auto Settings found.</CommandEmpty>
                                <CommandGroup>
                                    {sKeys.map((s) => (
                                        <CommandItem
                                            key={s}
                                            value={s}
                                            onSelect={(currentValue) => {
                                                setFilterValue(currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            <CheckIcon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    filterValue === s ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {autoSettingLabelMap[s as keyof typeof autoSettingLabelMap]}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
                <div className={"flex flex-row justify-center items-center gap-4"}>
                    <Button
                        onClick={() => setModalOpen(true)}
                    >Add</Button>
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
            </div>
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
                            /* onClick={() => setActiveItem(row.getValue("id"))} */
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 p-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDelete}
                        className={clsx("hidden", table.getFilteredSelectedRowModel().rows.length > 0 && "inline-block")}
                    >
                        Delete
                    </Button>
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


AutoSettingDataTable.displayName = "AutoSettingDataTable"


export default AutoSettingDataTable;
