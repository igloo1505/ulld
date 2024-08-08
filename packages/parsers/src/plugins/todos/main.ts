import { z } from 'zod'
import { Prisma, TaskCategory } from "@ulld/database/internalDatabaseTypes"
import { prisma } from "@ulld/database/db"
import dayjs from 'dayjs'
import { topicZodObject, subjectZodObject, tagZodObject } from '@ulld/configschema/configUtilityTypes/docTypes'
import { zodCoerceToDate, zodOptBool, zodOptNum } from '@ulld/utilities/schemas/utility'
import { toDoItemStatuses } from "@ulld/utilities/toDoStatusData";



export const zodArrayUnion = <T extends string | number>(t: ReturnType<typeof z.string> | ReturnType<typeof z.number>) => z.union([t, t.array()]).transform((a): T[] => Array.isArray(a) ? a as T[] : [a] as T[]).default([])

export const getToDoSearchParams = z.object({
    // editing: z.string().optional(),
    listNames: zodArrayUnion<string>(z.string()).optional(),
    listIds: zodArrayUnion<number>(z.coerce.number()).optional(),
    showCompleted: z.union([z.string(), z.boolean()]).optional().transform((s) => typeof s === "boolean" ? s : s === "true")
})

export type ToDoSearchParamInput = z.input<typeof getToDoSearchParams>
export type ToDoSearchParams = z.output<typeof getToDoSearchParams>

export const defaultToDoListName = "ToDo's"


export const getParsedToDoSearchParams = (params: ToDoSearchParams, listIds: number[]): Prisma.ToDoListWhereInput => {
    return {
        id: {
            in: listIds
        }
    } satisfies Prisma.ToDoListWhereInput
}

export const getMostRecentToDoListId = async () => {
    return await prisma.toDoList.findMany({
        select: {
            id: true
        },
        orderBy: {
            lastUpdate: "desc"
        },
        take: 1
    })
}


export const ToDoCategoryDisplayMap: { [k in TaskCategory]: string } = {
    online: "Online",
    priority: "Priority",
    urgent: "Urgent",
    work: "Work",
    gym: "Gym",
    freetime: "Free Time",
    bug: "Bug",
    feature: "Feature",
    documentation: "Documentation",
    study: 'study',
    research: 'research',
    paper: 'paper'
}



export const todoZodFormUniversalSchema = z.object({
    id: z.number().optional(),
    task: z.string(),
    details: z.string().optional(),
    // dueAt: z.union([
    //     z.string(),
    //     z.date()
    // ]),
    dueAt: z.date(),
    category: z.nativeEnum(TaskCategory).array()
})


export const todoZodFormSchemaClientSchema = z.object({
    associatedNoteIds: z.string().array(),
    tags: z.string().array(),
    topics: z.string().array(),
    parentId: z.string().array(),
    tagInput: z.string(),
    topicInput: z.string(),
})




export const taskIdItemSchema = z.object({
    id: z.number().int(),
    label: z.string(),
    active: z.boolean().default(false)
})

export type TodoListInput = z.input<typeof todoListSchema>
export type TodoListOutput = z.output<typeof todoListSchema>


export const todoZodFormSchema = todoZodFormUniversalSchema.merge(todoZodFormSchemaClientSchema)

export type ToDoZodSchema = z.infer<typeof todoZodFormSchema>

const taskIds = z.number().array()
const status = z.union([
    z.enum(toDoItemStatuses), 
    z.string()
])
const priority = z.number().int().min(0).max(10)

export const todoPriorityChangeSchema = z.object({
    taskIds,
    priority
})

export const todoStatusChangeSchema = z.object({
    taskIds,
    status
})


export const todoStatusDueAtSchema = z.object({
    taskIds,
    dueAt: z.union([z.date(), z.string(), z.null()]).transform(a => dayjs(a).isValid() ? new Date(a as string) : null)
})


export const todoListNameSchema = z.object({
    taskId: z.coerce.number(),
    listId: z.coerce.number()
})


export const todoTaskSchema = z.object({
    id: z.coerce.number().int(),
    createdAt: zodCoerceToDate(false),
    task: z.string(),
    dueAt: zodCoerceToDate(true),
    details: z.string().optional().nullish(),
    parentId: zodOptNum,
    category: z.nativeEnum(TaskCategory).optional().nullable(),
    bookmarked: zodOptBool(false),
    status,
    priority: z.coerce.number().int(),
    completedOn: zodCoerceToDate(true),
    toDoListId: zodOptNum
})


export const todoListSchema = z.object({
    topic: topicZodObject.array().default([]),
    subject: subjectZodObject.array().default([]),
    tags: tagZodObject.array().default([]),
    id: z.number().int(),
    label: z.string(),
    createdAt: zodCoerceToDate(false),
    lastUpdate: zodCoerceToDate(false),
    tasks: todoTaskSchema.array().default([]),
    _count: z.object({
        tasks: z.number().int().default(0),
        tags: z.number().int().default(0),
        topic: z.number().int().default(0),
        subject: z.number().int().default(0),
    })
})

export type TodoTaskInput = z.input<typeof todoTaskSchema>
export type TodoTaskOutput = z.output<typeof todoTaskSchema>

export const parseTodoTaskList = async (items: TodoTaskInput[] = []) => {
    let data: TodoTaskOutput[] = []
    for await (const k of items) {
        let res = await todoTaskSchema.parseAsync(k)
        data.push(res)
    }
    return data
}



export const parseTodoLists = async (todos: TodoListInput[]): Promise<TodoListOutput[]> => {
    return await todoListSchema.array().parseAsync(todos)
}
