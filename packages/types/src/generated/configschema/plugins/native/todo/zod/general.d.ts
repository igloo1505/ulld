import { z } from 'zod';
export declare const addTodoListSchema: z.ZodObject<{
    label: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    subjects: z.ZodArray<z.ZodString, "many">;
    topics: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    label: string;
    topics: string[];
    subjects: string[];
}, {
    tags: string[];
    label: string;
    topics: string[];
    subjects: string[];
}>;
export type AddToDoListSchema = z.infer<typeof addTodoListSchema>;
export declare const todoFilterFormSchema: z.ZodObject<{
    priority: z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>, number[] | undefined, number | number[] | undefined>;
    status: z.ZodDefault<z.ZodNativeEnum<{
        ToDo: "ToDo";
        In_Progress: "In_Progress";
        Backlog: "Backlog";
        Cancelled: "Cancelled";
        Done: "Done";
        Future: "Future";
    }>>;
    listNames: z.ZodRecord<z.ZodString, z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    listNames: Record<string, boolean>;
    priority?: number[] | undefined;
}, {
    listNames: Record<string, boolean | undefined>;
    priority?: number | number[] | undefined;
    status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
}>;
export type TodoFilterFormSchema = z.infer<typeof todoFilterFormSchema>;
export declare const todoListAddTaskSchema: z.ZodObject<{
    listName: z.ZodString;
    task: z.ZodString;
    priority: z.ZodDefault<z.ZodNumber>;
    status: z.ZodDefault<z.ZodNativeEnum<{
        ToDo: "ToDo";
        In_Progress: "In_Progress";
        Backlog: "Backlog";
        Cancelled: "Cancelled";
        Done: "Done";
        Future: "Future";
    }>>;
    dueAt: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>>>;
    details: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    task: string;
    priority: number;
    listName: string;
    dueAt?: Date | null | undefined;
    details?: string | undefined;
}, {
    task: string;
    listName: string;
    priority?: number | undefined;
    status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
    dueAt?: string | Date | null | undefined;
    details?: string | undefined;
}>;
export declare const todoListAddTaskSchemaTrpc: z.ZodObject<{
    listId: z.ZodNumber;
    task: z.ZodString;
    priority: z.ZodDefault<z.ZodNumber>;
    status: z.ZodDefault<z.ZodNativeEnum<{
        ToDo: "ToDo";
        In_Progress: "In_Progress";
        Backlog: "Backlog";
        Cancelled: "Cancelled";
        Done: "Done";
        Future: "Future";
    }>>;
    dueAt: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>>>;
    details: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    task: string;
    priority: number;
    listId: number;
    dueAt?: Date | null | undefined;
    details?: string | undefined;
}, {
    task: string;
    listId: number;
    priority?: number | undefined;
    status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
    dueAt?: string | Date | null | undefined;
    details?: string | undefined;
}>;
export declare const fullTaskSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    task: z.ZodString;
    dueAt: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>>>;
    details: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    status: z.ZodDefault<z.ZodNativeEnum<{
        ToDo: "ToDo";
        In_Progress: "In_Progress";
        Backlog: "Backlog";
        Cancelled: "Cancelled";
        Done: "Done";
        Future: "Future";
    }>>;
    priority: z.ZodDefault<z.ZodNumber>;
    category: z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<{
        bug: "bug";
        feature: "feature";
        documentation: "documentation";
        online: "online";
        priority: "priority";
        urgent: "urgent";
        work: "work";
        gym: "gym";
        freetime: "freetime";
        study: "study";
        research: "research";
        paper: "paper";
    }>>>;
    toDoListId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    created: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>>>;
}, "strip", z.ZodTypeAny, {
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    task: string;
    priority: number;
    id?: number | null | undefined;
    dueAt?: Date | null | undefined;
    details?: string | null | undefined;
    category?: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper" | null | undefined;
    toDoListId?: number | null | undefined;
    created?: Date | null | undefined;
}, {
    task: string;
    id?: number | null | undefined;
    dueAt?: string | Date | null | undefined;
    details?: string | null | undefined;
    status?: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future" | undefined;
    priority?: number | undefined;
    category?: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper" | null | undefined;
    toDoListId?: number | null | undefined;
    created?: string | Date | null | undefined;
}>;
export type ToDoListAddTaskSchema = z.infer<typeof todoListAddTaskSchema>;
//# sourceMappingURL=general.d.ts.map