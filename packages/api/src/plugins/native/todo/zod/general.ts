import { TaskCategory } from "@ulld/database/internalDatabaseTypes";
import { toDoItemStatuses } from "@ulld/utilities/toDoStatusData";
import { z } from "zod";
import { tagTopicSubjectList } from "../../../../schemas/taggable/tagTopicSubjectList";
import { dateZodProperty } from "@ulld/utilities/utils/dates";
const label = z.string().min(3).max(50);
const priority = z.coerce.number().int().min(0).max(10).default(5);
const dueAt = dateZodProperty.optional().nullable();
const category = z.nativeEnum(TaskCategory).optional().nullable();

const status = z.enum(toDoItemStatuses).default("ToDo");

export const addTodoListSchema = z
    .object({
        label,
    })
    .merge(tagTopicSubjectList);

export type AddToDoListSchema = z.infer<typeof addTodoListSchema>;

const listNames = z.record(z.boolean().default(false));

export const todoFilterFormSchema = z.object({
    priority: z
        .union([z.coerce.number(), z.coerce.number().array()])
        .optional()
        .transform((a) => (!a ? undefined : Array.isArray(a) ? a : [a])),
    status,
    listNames,
});

export type TodoFilterFormSchema = z.infer<typeof todoFilterFormSchema>;

const baseAddTaskSchema = z.object({
    task: z.string(),
    priority,
    status,
    dueAt,
    details: z.string().nullish(),
});

export const todoListAddTaskSchema = z
    .object({
        listName: label,
    })
    .merge(baseAddTaskSchema);

export const todoListAddTaskSchemaTrpc = z
    .object({
        listId: z.number(),
    })
    .merge(baseAddTaskSchema);


export const updateTaskSchema = z
    .object({
        id: z.number().int(),
    })
    .merge(baseAddTaskSchema);

export const fullTaskSchema = z.object({
    id: z.number().optional().nullable(),
    task: z.string(),
    dueAt,
    details: z.string().optional().nullable(),
    status,
    priority,
    category,
    toDoListId: z.number().optional().nullable(),
    created: dateZodProperty.optional().nullable(),
});

export type ToDoListAddTaskSchema = z.infer<typeof todoListAddTaskSchema>;
