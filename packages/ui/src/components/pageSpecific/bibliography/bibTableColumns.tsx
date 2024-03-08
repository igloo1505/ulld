"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "#/components/shad/ui/checkbox"
import dayjs from 'dayjs'
import { Button } from "#/components/shad/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "#/components/shad/ui/dropdown-menu"
import store from "#/state/store"
import { showToast } from "#/state/slices/ui"
import { BibEntryDataTableOutput } from "#/classes/prismaMdxRelations/BibEntry"
import type { useRouter } from "next/navigation"



export const getColumnDef = (router: ReturnType<typeof useRouter>): ColumnDef<BibEntryDataTableOutput>[] => {
    const columns: ColumnDef<BibEntryDataTableOutput>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "title",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Title
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div>{row.getValue("title")}</div>,
        },
        {
            header: "Id",
            accessorKey: "id",
            cell: ({ row }) => <div>{row.getValue("id")}</div>,
        },
        {
            accessorKey: "author",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Author(s)
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div>{row.getValue("author")}</div>,
        },
        {
            accessorKey: "added",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Added
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className={"min-w-[120px]"}>{dayjs(row.getValue("added")).format("M-DD-YY")}</div>,
            /* minSize: 120, */
            /* size: 120 */
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const payment = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => {
                                    let params = new URLSearchParams()
                                    let id = row.getValue("id")
                                    console.log("id: ", id)
                                    params.set("citations", id as string)
                                    console.log("id2: ", id)
                                    router.push(`/searchAll?${params.toString()}`)
                                }}
                            >
                                Find Related Notes
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => {
                                    window.navigator.clipboard.writeText(row.getValue("id"))
                                    store.dispatch(showToast({
                                        title: "Success",
                                        description: "Citation Id was copied successfully."
                                    }))
                                }
                                }
                            >
                                Copy Citation Id
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ]
    return columns
}


const setTitle = () => {
    let em = document.getElementById("refs")
    if (em && em.classList.contains("references")) {
        let h = document.createElement("h3")
        h.innerHTML = "References"
        em.insertBefore(h, em.childNodes.item(0))
    }
}

