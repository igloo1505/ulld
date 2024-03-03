import { z } from "zod"
import { serializeMdxContent } from ".."



// TODO: Add alphabetized key-value here as well to allow aphabetizing latex outputs in places like dictionaries and sort lists.
const tempUniversalTransform = async (s: string) => {
let res = await serializeMdxContent(s, true)
    return {
        ...res,
        original: s
    } as Awaited<ReturnType<typeof serializeMdxContent>> & {
            original: string
        }
}

export const zodMdxInlineStringSchema = z.string().transform(tempUniversalTransform)
export const zodMdxBlockStringSchema = z.string().transform(tempUniversalTransform)

export const zodMathInlineStringSchema = z.string().transform(tempUniversalTransform)
export const zodMathBlockStringSchema = z.string().transform(tempUniversalTransform)
