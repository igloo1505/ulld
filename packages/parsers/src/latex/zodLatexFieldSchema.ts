import { z } from "zod"
import { parseMdxString } from "../mdx/compiler/mdx-to-jsx"



// TODO: Add sort function here to properly sort labels with latex. Append an 'alphebitzed' property to the return object.
export const zodMdxTransform = async (data: string) => {
    const res = await parseMdxString({content: data})
    return { parsed: res, original: data }
}

// export const zodMdxFieldSchema = z.string().transform(zodMdxTransform)
export const zodMdxFieldSchema = z.string() // Remove this and move everything back to a normal string or optional string, now that components to parse mdx content on both the client and server are in place.

export const zodMdxFieldSchemaOptional = z.string().nullable()


export type ParseLatexInput = z.input<typeof zodMdxFieldSchema>
export type ParsedLatexOutput = z.output<typeof zodMdxFieldSchema>
