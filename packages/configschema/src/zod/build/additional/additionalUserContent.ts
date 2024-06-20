import {z} from 'zod'


export const additionalUserContent = z.object({
    css: z.string().optional()
}).default({})
