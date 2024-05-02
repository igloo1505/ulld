import {z} from 'zod'

export const dateZodProperty = z.union([z.string(), z.date()]).transform((d) => new Date(d))
export const dateNullableZodProperty = z.union([z.string(), z.date()]).nullish().transform((d) => d ? new Date(d) : d)
