export const toDoItemStatuses = [
    "ToDo",
    "In_Progress",
    "Backlog",
    "Cancelled",
    "Done",
    "Future",
] as const;

export const toDoItemStatusData = toDoItemStatuses.map((x) => {
    return {
        label: x === "ToDo" ? "To Do" : x.replaceAll("_", " "),
        value: x,
    }
})

export type ToDoListStatus = (typeof toDoItemStatuses)[number] | string;
export type ToDoItemStatus = (typeof toDoItemStatuses)[number] | string;
