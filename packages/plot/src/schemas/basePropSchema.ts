import {z} from 'zod'


export const basePropsSchema = z.object({
    title: z.string().optional(),
    desc: z.string().optional(),
    dataPoints: z.number().int().default(200)
})
