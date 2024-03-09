"use client"
import {
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
    LapTimerIcon,
    StarFilledIcon,
    StarIcon
} from "@radix-ui/react-icons"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Button } from '@ulld/tailwind/base'
import { ToDoListStatus } from "@prisma/client"
import { useRouter } from "next/navigation"
import clsx from "clsx"
import { TodoTaskOutput } from "@ulld/parsers"



const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
]

export const statuses: { value: ToDoListStatus, label: string, icon: React.FC<React.ComponentProps<typeof QuestionMarkCircledIcon>> }[] = [
    {
        value: "Backlog",
        label: "Backlog",
        icon: QuestionMarkCircledIcon,
    },
    {
        value: "ToDo",
        label: "To Do",
        icon: CircleIcon,
    },
    {
        value: "In_Progress",
        label: "In Progress",
        icon: StopwatchIcon,
    },
    {
        value: "Done",
        label: "Done",
        icon: CheckCircledIcon,
    },
    {
        value: "Cancelled",
        label: "Canceled",
        icon: CrossCircledIcon,
    },
    {
        value: "Future",
        label: "Future",
        icon: LapTimerIcon,
    },
]

type FType = (id?: number | null) => void

interface DataTableRowActionsProps<TData extends unknown> {
    row: Row<TData>
    onFavorite: (id?: number | null, shouldBookmark?: boolean) => void
    onDelete: FType
    onLabelChange: (id?: number | null, newLabel?: string) => void
    getItemId?: (item: any) => number
    getFavorited?: (item: any) => boolean
}



export const DataTableRowActions = <TData extends object>({
    row,
    onFavorite,
    onDelete,
    onLabelChange,
    getItemId,
    getFavorited
}: DataTableRowActionsProps<TData>) => {
    /* WARN:  Come abck and check how accurate this type actually is after removing it from the table. Who knows what they do internally. */
    const task = row.original as TodoTaskOutput
    const id = getItemId ? getItemId(task) : task?.id
    const favorited = getFavorited ? getFavorited(task) : "favorite" in task ? Boolean(task.favorite) : "bookmarked" in task ? Boolean(task.bookmarked) : false
    const router = useRouter()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem onClick={() => {
                    if (!task.id) return console.log(`No task.id found for`, task)
                    router.push(`/todo/add/task?edit=${task.id}`)
                }}>Edit</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => onFavorite(id, !favorited)}
                >
                    Favorite
                    <DropdownMenuShortcut>
                        <StarIcon className={clsx("w-3 h-3", favorited ? "color-foreground" : "color-muted-foreground")} />
                    </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup
                            value={task.category || undefined}
                            onValueChange={(val) => onLabelChange(id, val)}
                        >
                            {labels.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => onDelete(id)}
                >
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
