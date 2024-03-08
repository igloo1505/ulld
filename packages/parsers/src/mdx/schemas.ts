import {z} from 'zod'


export const serializeMdxConfigSchema = z.object({
    dontLoadPlugins: z.union([
        z.literal("mermaid"),
        z.literal("all"),
    ]).array().default([]),
    parseFrontMatter: z.boolean().default(false)
})


export const zodSerializedMdxSchema = z.object({
    compiledSource: z.string(),
    scope: z.record(z.string(), z.any()),
    frontmatter: z.record(z.string(), z.string()).default({}),
    original: z.string()
})

export const defaultSerializeConfig = {
    dontLoadPlugins: [
        "mermaid" as "mermaid"
    ]
}
