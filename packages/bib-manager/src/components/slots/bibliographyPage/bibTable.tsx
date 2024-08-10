"use client";
import React, { useMemo, useState } from "react";
import { getColumnDef } from "./bibTableColumns";
import {
    ColumnFiltersState,
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
import { type BibEntry, Prisma } from "@ulld/database";
import { useRouter } from "next/navigation";
import { Input } from "@ulld/tailwind/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@ulld/tailwind/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@ulld/tailwind/button";
import clsx from "clsx";
import { BibEntryDataTableOutput } from "@ulld/api/classes/prismaMdxRelations/bibEntry";
import {
    showBibEntryDetails,
    ShowBibEntryDetailsProps,
} from "../../../utils/showBibEntryDetails";
import { BibCore } from "@ulld/api/classes/prismaMdxRelations/Bib";

interface BibTableProps {
    bibEntries: BibEntryDataTableOutput[];
    bib?: BibCore | null;
}

const initiallyShow: (keyof BibEntry)[] = [
    "title",
    "author",
    "journal",
    "added",
];

const BibTable = ({ bibEntries, bib }: BibTableProps) => {
    const router = useRouter();
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [filterKey, setFilterKey] = useState<"Author" | "Title">("Title");
    const [rowSelection, setRowSelection] = useState({});
    const initialVisibility = useMemo(() => {
        let d: { [k in keyof typeof Prisma.BibEntryScalarFieldEnum]?: boolean } =
            {};
        Object.keys(Prisma.BibEntryScalarFieldEnum).forEach((k) => {
            if (
                initiallyShow.includes(k as keyof typeof Prisma.BibEntryScalarFieldEnum)
            ) {
                d[k as keyof typeof d] = true;
            } else {
                d[k as keyof typeof d] = false;
            }
        });
        return d;
    }, []);
    const [visibilityState, setVisibilityState] =
        useState<Record<string, boolean>>(initialVisibility);
    const columns = useMemo(() => getColumnDef(router), []);

    const setActiveItem = (id: string) => {
        let entry = bib?.findEntryById(id);
        if (entry) {
            showBibEntryDetails(entry as ShowBibEntryDetailsProps);
        }
    };

    const table = useReactTable<BibEntryDataTableOutput>({
        data: bibEntries,
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
        /* debugTable: true, */
        /* debugHeaders: true, */
        /* debugColumns: true, */
    });

    const handleDeleteBibItem = () => {
        window.alert("handleDeleteBibItem has not yet been implemented");
    };

    return (
        <div className="rounded-md border mt-8">
            <div className="flex items-center p-4">
                <Input
                    placeholder={`Filter ${filterKey.toLowerCase()}...`}
                    value={
                        (table
                            .getColumn(filterKey.toLowerCase())
                            ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn(filterKey.toLowerCase())
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <div className={"flex flex-row justify-center items-center mx-4"}>
                    <div className={"grid grid-cols-[1fr_1fr] space-x-2 "}>
                        <Button
                            onClick={() => setFilterKey("Title")}
                            disabled={filterKey === "Title"}
                        >
                            Title
                        </Button>
                        <Button
                            onClick={() => setFilterKey("Author")}
                            disabled={filterKey === "Author"}
                            className={clsx(filterKey === "Author" && "disabled")}
                        >
                            Author
                        </Button>
                    </div>
                    <Button
                        variant="ghost"
                        /// @ts-ignore
                        className={clsx(
                            "hidden",
                            Boolean(
                                table.getColumn("title")?.getFilterValue()?.length > 0 ||
                                table.getColumn("author")?.getFilterValue()?.length > 0,
                            ) && "inline-block ml-2",
                        )}
                        onClick={() => {
                            table.getColumn("title")?.setFilterValue("");
                            table.getColumn("author")?.setFilterValue("");
                        }}
                    >
                        Clear
                    </Button>
                </div>
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
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
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
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                onClick={() => setActiveItem(row.getValue("id"))}
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
                        onClick={handleDeleteBibItem}
                        className={clsx(
                            "hidden",
                            table.getFilteredSelectedRowModel().rows.length > 0 &&
                            "inline-block",
                        )}
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
    );
};

BibTable.displayName = "BibTable";

export default BibTable;
