import {z} from 'zod'

export const fontSchema = z.object({
    color: z.string().optional(),
    famile: z.string().optional(),
    size: z.number().min(1).optional(),
});
