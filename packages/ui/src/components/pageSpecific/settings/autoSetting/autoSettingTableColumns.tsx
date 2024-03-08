import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "#/components/shad/ui/checkbox"
import { Button } from "#/components/shad/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "#/components/shad/ui/dropdown-menu"
import type { useRouter } from "next/navigation"
import { AutoSettingType } from "#/trpc/routers/sync"
import { autoSettingSearchAllParamMap } from "#/lib/formatting/formatSearchAllParams"
import { autoSetting } from "@prisma/client"
import { client } from "#/trpc/client"


export const getAutoSettingColumnDef = (router: ReturnType<typeof useRouter>, removeById: (id: number) => void) => {
    const columns: ColumnDef<AutoSettingType>[] = [
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
            accessorKey: "glob",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Pattern
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div>{row.getValue("glob")}</div>,
        },
        {
            accessorKey: "id",
            header: "Id",
            cell: ({ row }) => <div>{row.getValue("id")}</div>,
        },
        {
            accessorKey: "type",
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
            cell: ({ row }) => <div>{row.getValue("type")}</div>,
        },
        {
            accessorKey: "value",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Value
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className={"min-w-[120px]"}>{row.getValue("value")}</div>,
            /* minSize: 120, */
            /* size: 120 */
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                let _id: number | undefined = row.getValue("id")
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
                                    let val = row.getValue("value") as string
                                    let tp = row.getValue("type") as autoSetting
                                    params.set(autoSettingSearchAllParamMap[tp], val)
                                    router.push(`/searchAll?${params.toString()}`)
                                }}
                            >
                                Find Related Notes
                            </DropdownMenuItem>
                            {_id && <DropdownMenuItem
                                onClick={async () => {
                                    if (!_id) return null
                                    await client.autoSettings.deleteAutoSettingById.mutate(_id)
                                    removeById(_id)
                                }}
                            >
                                Delete
                            </DropdownMenuItem>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        }
    ]
    return columns
}
