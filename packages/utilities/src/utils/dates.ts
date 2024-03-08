import {z} from 'zod'

export const dateZodProperty = z.union([z.string(), z.date()]).transform((d) => new Date(d))
