import { Prisma } from "@ulld/database/internalDatabaseTypes";
export declare const todoPageTaskSelect: Prisma.ToDoListSelect;
export declare const toDoRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    getToDoLists: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number | undefined;
        _input_out: number | undefined;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        label: string;
        active: boolean;
    } | {
        id: number;
        label: string;
        active: boolean;
    }[]>;
    getToDoListById: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number;
        _input_out: number;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, ({
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        topics: {
            value: string;
            kanbanId: number | null;
        }[];
        subjects: {
            value: string;
            kanbanId: number | null;
        }[];
    } & {
        id: number;
        label: string;
        createdAt: Date;
        lastUpdate: Date;
    }) | null>;
    getToDos: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            listIds?: string | number | string[] | number[] | undefined;
            showCompleted?: string | boolean | undefined;
        };
        _input_out: {
            showCompleted: boolean;
            listIds?: number[] | undefined;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        todos: {
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            id: number;
            label: string;
            topic: {
                value: string;
            }[];
            subject: {
                value: string;
            }[];
            tasks: {
                status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
                id: number;
                bookmarked: boolean;
                task: string;
                priority: number;
                createdAt?: any;
                dueAt?: any;
                details?: string | null | undefined;
                parentId?: number | null | undefined;
                category?: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper" | null | undefined;
                toDoListId?: number | null | undefined;
            }[];
            _count: {
                tags: number;
                topic: number;
                subject: number;
                tasks: number;
            };
            createdAt?: any;
            lastUpdate?: any;
        }[];
        lists: {
            id: number;
            label: string;
            active: boolean;
        }[];
    }>;
    setToDoStatus: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
            taskIds: number[];
        };
        _input_out: {
            status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
            taskIds: number[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    findListsByTaggables: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            topics?: string[] | undefined;
            subjects?: string[] | undefined;
            tags?: string[] | undefined;
        };
        _input_out: {
            tags: string[];
            topics: string[];
            subjects: string[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        label: string;
        createdAt: Date;
        tasks: {
            category: import(".prisma/client").$Enums.TaskCategory | null;
            createdAt: Date;
            dueAt: Date | null;
            details: string | null;
        }[];
        _count: {
            tasks: number;
        };
    }[]>;
    getOverdueTasksByListId: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number;
        _input_out: number;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        tasks: {
            id: number;
            createdAt: Date;
            task: string;
            dueAt: Date | null;
            details: string | null;
            parentId: number | null;
            category: import(".prisma/client").$Enums.TaskCategory | null;
            bookmarked: boolean;
            status: import(".prisma/client").$Enums.ToDoListStatus;
            priority: number;
            toDoListId: number | null;
        }[];
        _count: {
            tasks: number;
        };
    } | null>;
    setToDoDueDate: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            dueAt: ((string | Date) & (string | Date | undefined)) | null;
            taskIds: number[];
        };
        _input_out: {
            dueAt: Date | null;
            taskIds: number[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    setToDoList: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            taskId: number;
            listId: number;
        };
        _input_out: {
            taskId: number;
            listId: number;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    deleteTaskByIds: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: string | number | string[] | number[] | undefined;
        _input_out: number[];
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    toggleToDoBookmark: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            taskId: number;
            shouldBookmark?: boolean | undefined;
        };
        _input_out: {
            taskId: number;
            shouldBookmark?: boolean | undefined;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    setToDoPriority: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            priority: number;
            taskIds: number[];
        };
        _input_out: {
            priority: number;
            taskIds: number[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    getToDoDetails: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            toDoId: number;
        };
        _input_out: {
            toDoId: number;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, ({
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        topics: {
            value: string;
            kanbanId: number | null;
        }[];
    } & {
        id: number;
        createdAt: Date;
        task: string;
        dueAt: Date | null;
        details: string | null;
        parentId: number | null;
        category: import(".prisma/client").$Enums.TaskCategory | null;
        bookmarked: boolean;
        status: import(".prisma/client").$Enums.ToDoListStatus;
        priority: number;
        toDoListId: number | null;
    }) | null>;
    createNewTodoList: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            tags: string[];
            label: string;
            topics: string[];
            subjects: string[];
        };
        _input_out: {
            tags: string[];
            label: string;
            topics: string[];
            subjects: string[];
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        label: string;
        createdAt: Date;
        lastUpdate: Date;
    }>;
    createNewToDo: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            task: string;
            listId: number;
            priority?: number | undefined;
            status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
            dueAt?: string | Date | null | undefined;
            details?: string | undefined;
        };
        _input_out: {
            status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
            task: string;
            priority: number;
            listId: number;
            dueAt?: Date | null | undefined;
            details?: string | undefined;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        label: string;
        createdAt: Date;
        lastUpdate: Date;
    }>;
    deleteToDos: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number[];
        _input_out: number[];
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
    editTaskNote: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            note: string | null;
            taskId: number;
        };
        _input_out: {
            note: string | null;
            taskId: number;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: number;
        createdAt: Date;
        task: string;
        dueAt: Date | null;
        details: string | null;
        parentId: number | null;
        category: import(".prisma/client").$Enums.TaskCategory | null;
        bookmarked: boolean;
        status: import(".prisma/client").$Enums.ToDoListStatus;
        priority: number;
        toDoListId: number | null;
    }>;
    getMostRecentToDoListId: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: object;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }, {
        id: number;
    }[]>;
    archiveTasks: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number[];
        _input_out: number[];
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, Prisma.BatchPayload>;
}>;
//# sourceMappingURL=taskManagerRouter.d.ts.map