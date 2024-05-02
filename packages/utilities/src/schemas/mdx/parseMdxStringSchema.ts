import {z} from 'zod'


export const parseMdxStringSchema = z.object({
    content: z.string(),
    display: z.union([z.literal("display"), z.literal("inline")]),
});


export type ParseMdxStringInput = z.input<typeof parseMdxStringSchema>
export type ParseMdxStringOutput = z.output<typeof parseMdxStringSchema>
