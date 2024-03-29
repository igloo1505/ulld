import {z} from 'zod'


export const serializeMdxConfigSchema = z.object({
    dontLoadPlugins: z.union([
        z.literal("mermaid"),
        z.literal("all"),
    ]).array().default([]),
    parseFrontMatter: z.boolean().default(false)
})


export const defaultSerializeConfig = {
    dontLoadPlugins: [
        "mermaid" as "mermaid"
    ]
}
