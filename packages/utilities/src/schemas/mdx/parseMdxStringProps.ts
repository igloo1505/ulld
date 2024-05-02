import {z} from 'zod'

export const parseMdxProps = z.object({
    content: z.string(),
    display: z.union([z.literal("display"), z.literal("inline")]).default("display"),
})


export type ParseMdxPropInput = z.input<typeof parseMdxProps>
export type ParseMdxPropOutput = z.output<typeof parseMdxProps>
