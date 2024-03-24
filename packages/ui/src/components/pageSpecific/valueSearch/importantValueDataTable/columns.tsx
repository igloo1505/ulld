import {
    ColumnDef, Row,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@ulld/tailwind/button"
import {  Checkbox } from "@ulld/tailwind/checkbox"
import Link from "next/link"
import { DateTime } from "@ulld/api/classes/data/dateTime"
import { ValueSearchTableItem } from "@ulld/api/trpcTypes/valueTableSearch"



export const getValueSearchTableColumns = (inputSearch: number | null, decimalPlaces: number = 3): ColumnDef<ValueSearchTableItem>[] => {
    return [
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
            cell: ({ row }) => {
                return (
                    <Link href={row.getValue("href")} className="truncate">{row.getValue("title")}</Link>
                )
            }
        },
        {
            accessorKey: "href",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Url
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                let href = row.getValue("href")
                console.log("href: ", href)
                return (
                    <Link href={row.getValue("href")} className="truncate">{row.getValue("href")}</Link>
                )
            }
        },
        {
            accessorKey: "firstSync",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Created
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="">{new DateTime(row.getValue("firstSync")).formatDate(false)}</div>,
            enableHiding: true
        },
        {
            accessorKey: "lastSync",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Last Sync
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="">{new DateTime(row.getValue("lastSync")).formatDate(false)}</div>,
            enableHiding: true
        },
        {
            accessorKey: "noteType",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Type
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="">{row.getValue("noteType")}</div>,
        },
        {
            accessorKey: "importantValues",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Values
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const vals = row.getValue("importantValues") as number[]
                return <div className="text-sm flex flex-col justify-center items-start">{vals?.map((v: number, i: number) => {
                    return <div key={`dt-${i}`} className={"text-sm"}>{v === parseInt(`${v}`) ? v : v.toFixed(decimalPlaces)}</div>
                })}</div>
            },
            ...(inputSearch && {
                sortingFn: (rowOne: Row<ValueSearchTableItem>, rowTwo: Row<ValueSearchTableItem>) => {
                    let one = rowOne.getValue("importantValues") as number[]
                    let two = rowTwo.getValue("importantValues") as number[]
                    let v1 = Math.min(...one.map((u) => Math.abs(inputSearch - u)))
                    let v2 = Math.min(...two.map((u) => Math.abs(inputSearch - u)))
                    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
                }
            })
        },
        /* { */
        /*     id: "actions", */
        /*     enableHiding: false, */
        /*     cell: ({ row }) => { */
        /*         const payment = row.original */
        /*         return ( */
        /*             <DropdownMenu> */
        /*                 <DropdownMenuTrigger asChild> */
        /*                     <Button variant="ghost" className="h-8 w-8 p-0"> */
        /*                         <span className="sr-only">Open menu</span> */
        /*                         <MoreHorizontal className="h-4 w-4" /> */
        /*                     </Button> */
        /*                 </DropdownMenuTrigger> */
        /*                 <DropdownMenuContent align="end"> */
        /*                     <DropdownMenuLabel>Actions</DropdownMenuLabel> */
        /*                     <DropdownMenuItem>View customer</DropdownMenuItem> */
        /*                     <DropdownMenuItem>View payment details</DropdownMenuItem> */
        /*                 </DropdownMenuContent> */
        /*             </DropdownMenu> */
        /*         ) */
        /*     }, */
        /* }, */
    ]
}
