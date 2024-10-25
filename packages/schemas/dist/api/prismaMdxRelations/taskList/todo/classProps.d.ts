import { z } from "zod";
export declare const todoTaskZodObject: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNumber;
    createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    task: z.ZodString;
    dueAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    associatedNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    category: z.ZodNativeEnum<{
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
    }>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    status: z.ZodEnum<["ToDo", "In_Progress", "Backlog", "Cancelled", "Done", "Future"]>;
    priority: z.ZodNumber;
    parent: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
    child: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
    ToDoList: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        label: z.ZodString;
        tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, Pick<{
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        bibEntries: z.ZodArray<z.ZodAny, "many">;
        mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    }, "createdAt" | "lastUpdate">>, {
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        id: number;
        label: string;
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        createdAt: Date;
        lastUpdate: Date;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        tasks: any[];
    }, {
        id: number;
        label: string;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        createdAt?: string | Date | null | undefined;
        lastUpdate?: string | Date | null | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        tasks?: any[] | undefined;
    }>;
    toDoListId: z.ZodNumber;
}, {
    topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId?: number | null | undefined;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId?: number | null | undefined;
    }, string>]>, "many">>;
}>, "strip", z.ZodTypeAny, {
    id: number;
    tags: {
        value: string;
        kanbanId?: number | null | undefined;
    }[];
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    createdAt: Date;
    topics: {
        value: string;
    }[];
    subjects: {
        value: string;
    }[];
    ToDoList: {
        id: number;
        label: string;
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        createdAt: Date;
        lastUpdate: Date;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        tasks: any[];
    };
    task: string;
    dueAt: Date;
    associatedNotes: any[];
    category: "bug" | "feature" | "documentation" | "online" | "priority" | "urgent" | "work" | "gym" | "freetime" | "study" | "research" | "paper";
    priority: number;
    bookmarked: boolean;
    toDoListId: number;
    details?: string | null | undefined;
    parentId?: number | null | undefined;
    parent?: any;
    child?: any;
}, {
    id: number;
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    ToDoList: {
        id: number;
        label: string;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        createdAt?: string | Date | null | undefined;
        lastUpdate?: string | Date | null | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        tasks?: any[] | undefined;
    };
    task: string;
    category: "bug" | "feature" | "documentation" | "online" | "priority" | "urgent" | "work" | "gym" | "freetime" | "study" | "research" | "paper";
    priority: number;
    toDoListId: number;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    createdAt?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    dueAt?: string | Date | null | undefined;
    details?: string | null | undefined;
    associatedNotes?: any[] | undefined;
    parentId?: number | null | undefined;
    bookmarked?: boolean | undefined;
    parent?: any;
    child?: any;
}>;
//# sourceMappingURL=classProps.d.ts.map