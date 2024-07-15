import {
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
    LapTimerIcon,
} from "@radix-ui/react-icons";
import { ToDoListStatus } from "@ulld/database/internalDatabaseTypes";

export const priorityStrings = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]



export const initialTableVisibility = {
    id: false,
    bookmarked: false,
    todoListLabel: false,
};

export const tableIds: Record<string, string> = {
    id: "id",
    actions: "actions",
    bookmarked: "bookmarked",
    select: "select",
    priority: "priority",
    status: "status",
    task: "task",
    dueAt: "dueAt",
    todoListLabel: "todoListLabel",
};


export const stylesMap: { [k in keyof typeof tableIds]: string } = {
    actions: "w-[50px]",
    id: "w-12",
    bookmarked: "w-12",
    select: "w-12",
    priority: "w-[120px]",
    status: "w-[120px]",
    task: "max-w-full",
    dueAt: "w-[120px] min-w-[120px] max-w-[200px]",
    todoListLabel: "w-[200px] min-w-fit"
}


export const taskStatuses: {
    value: ToDoListStatus;
    label: string;
    icon: React.FC<React.ComponentProps<typeof QuestionMarkCircledIcon>>;
}[] = [
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
    ];
