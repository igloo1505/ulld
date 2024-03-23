import { z } from 'zod'
import dayjs from 'dayjs'
import { Prisma, TaskCategory, ToDoListStatus } from '@ulld/database/internalDatabaseTypes'
import { serverClient } from '@ulld/api/serverClient'


export type ToDoPageData = Awaited<ReturnType<typeof serverClient.toDo.getToDos>>

export const zodArrayUnion = <T extends string | number>(t: ReturnType<typeof z.string> | ReturnType<typeof z.number>) => z.union([t, t.array()]).transform((a): T[] => Array.isArray(a) ? a as T[] : [a] as T[]).default([])

export const defaultToDoListName = "ToDo's"


export const getParsedToDoSearchParams = (params: ToDoSearchParams, listIds: number[]): Prisma.ToDoListWhereInput => {
    return {
        id: {
            in: listIds
        }
    } satisfies Prisma.ToDoListWhereInput
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


export const todoZodFormSchema = todoZodFormUniversalSchema.merge(todoZodFormSchemaClientSchema)

export type ToDoZodSchema = z.infer<typeof todoZodFormSchema>

const taskIds = z.number().array()
const status = z.nativeEnum(ToDoListStatus)
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


export interface AddTaskSearchParams {
    listName?: string
    editing?: string
    listId?: string
}

export interface ToDoAddTaskPageProps {
    searchParams: AddTaskSearchParams
}
