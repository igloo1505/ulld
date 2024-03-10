import { z } from "zod"
import { defaultSerializeConfig, zodSerializedMdxSchema } from "../mdx/schemas"
import { serializeMdxContent } from "../mdx/compiler"



// TODO: Add sort function here to properly sort labels with latex. Append an 'alphebitzed' property to the return object.
const zodMdxTransform = async (data: string) => {
    const res = await serializeMdxContent(data, true, defaultSerializeConfig)
    return zodSerializedMdxSchema.parse({ ...res, original: data }) || ""
}

export const zodMdxFieldSchema = z.string().transform(zodMdxTransform)

export const zodMdxFieldSchemaOptional = z.string().nullable().transform(async (s) => s ? await zodMdxTransform(s) : undefined)


export type ParseLatexInput = z.input<typeof zodMdxFieldSchema>
export type ParsedLatexOutput = z.output<typeof zodMdxFieldSchema>
