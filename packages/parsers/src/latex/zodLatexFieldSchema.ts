import { z } from "zod"
import { serializeMdxContent } from ".."
import { defaultSerializeConfig } from "@ulld/utilities"


export const serializeMdxConfigSchema = z.object({
    dontLoadPlugins: z.enum(["mermaid"]).array(),
    parseFrontMatter: z.boolean().default(false)
})


export const zodSerializedMdxSchema = z.object({
    compiledSource: z.string(),
    scope: z.record(z.string(), z.any()),
    frontmatter: z.record(z.string(), z.string()).default({}),
    original: z.string()
})

// TODO: Add sort function here to properly sort labels with latex. Append an 'alphebitzed' property to the return object.
const zodMdxTransform = async (data: string) => {
    const res = await serializeMdxContent(data, true, defaultSerializeConfig)
    return zodSerializedMdxSchema.parse({ ...res, original: data }) || ""
}

export const zodMdxFieldSchema = z.string().transform(zodMdxTransform)

export const zodMdxFieldSchemaOptional = z.string().nullable().transform(async (s) => s ? await zodMdxTransform(s) : s)


