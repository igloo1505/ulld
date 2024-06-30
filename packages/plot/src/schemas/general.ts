import { z } from "zod";



export const inputTypeSchema = z.union([
    z.literal("input"),
    z.literal("slider"),
    z.literal("numeric"),
])

export const baseInputProps = z.object({
    inputId: z.string(),
    initialValue: z.number().default(0)
})
