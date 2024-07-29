"use client"
import { SortingState, ColumnFiltersState, useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, ColumnDef, flexRender } from '@tanstack/react-table'
import React, { MouseEventHandler, useState } from 'react'
import { Checkbox} from '@ulld/tailwind/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from '@ulld/tailwind/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ulld/tailwind/table'
import { Input } from '@ulld/tailwind/input'
import { Button } from '@ulld/tailwind/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import clsx from 'clsx'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Route } from 'next'
import Link from 'next/link'
import { client } from '@ulld/api/client'
import { ParsedAppConfig } from '@ulld/configschema/types'
import {  getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import { showToast } from '@ulld/state/slices/ui'
import { useUlldStore } from '@ulld/hooks/useUlldStore'




interface NotebookTableInput {
    fp: string
}

interface NotebooksTableProps {
    notebooks: NotebookTableInput[]
    hrefMap: { [k: string]: string | undefined }
}


const convertNotebookPaths = async (p: string[], _config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let res = await axios.post("/api/fsToRemote/ipynb/convertNotebooks", { paths: p, timeout: config.jupyter.nbConvert.conversionTimeout })
    return res.data.success
}


const NotebooksTable = ({ notebooks, hrefMap }: NotebooksTableProps) => {
    const router = useRouter()
    const [sorting, setSorting] = useState<SortingState>([])
    const store = useUlldStore()
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [rowSelection, setRowSelection] = useState({})
    const columns: ColumnDef<NotebookTableInput>[] = [
        {
            id: "select",
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
            enableHiding: false,
        },
        {
            accessorKey: "fp",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Path
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                let fp = row.getValue("fp") as string
                return <Link className={"text-foreground no-underline"} href={hrefMap[fp as keyof typeof hrefMap] as Route || "/"}>{fp}</Link>
            }
        },
        {
            id: "syncButton",
            enableHiding: true,
            cell: ({ row }) => {
                return (
                    <Button
                        onClick={async () => {
                            let success = await convertNotebookPaths([row.getValue("fp")])
                            store.dispatch(showToast({
                                title: "Success",
                                description: success ? "Notebook converted successfully." : "Something went wrong converting that notebook."
                            }))
                        }
                        }
                    >Sync</Button>
                )
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 text-foreground fill-foreground">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4 fill-foreground" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={async () => {
                                    let success = await convertNotebookPaths([row.getValue("fp")])
                                    store.dispatch(showToast({
                                        title: "Success",
                                        description: success ? "Notebook converted successfully." : "Something went wrong converting that notebook."
                                    }))
                                }
                                }
                            >
                                Parse from File System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ]

    const table = useReactTable<NotebookTableInput>({
        data: notebooks,
        columns: columns,
        state: {
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
        onRowSelectionChange: setRowSelection,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    })
    const syncSelected = async () => {
        const selected = table.getSelectedRowModel().rows.map((r) => r.getValue("fp") as string)
        await convertNotebookPaths(selected)
    }

    const clearTempDir: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.stopPropagation()
        await client.fsUtils.clearTempDir.mutate()
    }

    return (
        <div className="rounded-md border mt-8">
            <div className={"w-full flex flex-row justify-between items-center p-4"}>
                <div className="flex items-center">
                    <Input
                        placeholder={`Filter...`}
                        value={(table.getColumn("fp")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("fp")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                </div>
                <div className={"flex flex-row justify-center items-center gap-4"}>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={clearTempDir}
                        className={clsx("hidden", Boolean(notebooks.find((n) => n.fp.startsWith("/__temp__"))) && "inline-block")}
                    >
                        Clear temp dir
                    </Button>
                    <Button
                        variant="default"
                        size="sm"
                        onClick={syncSelected}
                        className={clsx("hidden", table.getFilteredSelectedRowModel().rows.length > 0 && "inline-block")}
                    >
                        Sync
                    </Button>
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
                            /* onClick={() => { */
                            /*     let fp = row.getValue("fp") as string */
                            /*     let p = hrefMap[fp] */
                            /*     console.log("fp: ", fp) */
                            /*     console.log("p: ", p) */
                            /*     if (p) { */
                            /*         router.push(p as Route) */
                            /*     } else { */
                            /*         let params = new URLSearchParams() */
                            /*         params.set("rootRelPath", fp) */
                            /*         router.push(`/notebooks/general?${fp}`) */
                            /*     } */
                            /* }} */
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


NotebooksTable.displayName = "NotebooksTable"


export default NotebooksTable;
