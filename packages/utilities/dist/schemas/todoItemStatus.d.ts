export declare const toDoItemStatuses: readonly ["ToDo", "In_Progress", "Backlog", "Cancelled", "Done", "Future"];
export declare const toDoItemStatusData: {
    label: string;
    value: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
}[];
export type ToDoListStatus = (typeof toDoItemStatuses)[number] | string;
export type ToDoItemStatus = (typeof toDoItemStatuses)[number] | string;
//# sourceMappingURL=todoItemStatus.d.ts.map