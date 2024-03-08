import {z} from 'zod'

const taskListIdSchema = z.object({
label: z.string(),
    id: z.number(),
    active: z.boolean().default(false)
})

export type TaskListIds = z.output<typeof taskListIdSchema>
