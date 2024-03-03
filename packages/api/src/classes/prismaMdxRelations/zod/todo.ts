import { TaskCategory, ToDoListStatus } from '@prisma/client'
import { z } from 'zod'
import { subjectZodObject, tagZodObject, topicZodObject } from './general'
import { zodCoerceToDate, zodOptNum, zodOptBool } from '@ulld/utilities'


// BUG: The zodLatexFieldSchema validator was removed and switched to client side rendering the latex to avoid an issue with the error:
// Cannot use 'in' operator to search for 'themes' in tsx
// Try going back to parsing the latex server side when time allows.
export const todoTaskSchema = z.object({
    id: z.coerce.number().int(),
    createdAt: zodCoerceToDate(false),
    task: z.string(),
    dueAt: zodCoerceToDate(true),
    details: z.string().optional().nullish(),
    parentId: zodOptNum,
    category: z.nativeEnum(TaskCategory).optional().nullable(),
    bookmarked: zodOptBool(false),
    status: z.nativeEnum(ToDoListStatus),
    priority: z.coerce.number().int(),
    toDoListId: zodOptNum
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


export const taskIdItemSchema = z.object({
    id: z.number().int(),
    label: z.string(),
    active: z.boolean().default(false)
})

export type TodoListInput = z.input<typeof todoListSchema>
export type TodoListOutput = z.output<typeof todoListSchema>

