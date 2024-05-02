import {z} from 'zod'

export const fontSchema = z.object({
    color: z.string().optional(),
    family: z.string().default("var(--font-sans)"),
    size: z.number().min(1).optional(),
});



export const fontSchemaWithSize = fontSchema.required({size: true})


export const fontSchemaRequired = fontSchema.required({
    color: true,
    family: true,
    size: true
})
