import { serializeMdxContent } from "../mdx/compiler";
import { z } from "zod";

// TODO: Add alphabetized key-value here as well to allow aphabetizing latex outputs in places like dictionaries and sort lists.
const tempUniversalTransform = async (s: string | null | undefined) => {
    if(!s) return undefined
    try {
        let res = await serializeMdxContent(s, true);
        if (!res) {
            return { original: s };
        }
        return {
            ...res,
            original: s,
        } as Awaited<ReturnType<typeof serializeMdxContent>> & {
            original: string;
        };
    } catch (err) {
        console.error(err);
        return {
            original: s,
        };
    }
};

export const zodMdxBlockTransform = tempUniversalTransform
export const zodMdxInlineTransform = tempUniversalTransform

export const zodMdxInlineStringSchema = z
    .string()
    .transform(tempUniversalTransform);

export const zodMdxBlockStringSchema = z
    .string()
    .transform(tempUniversalTransform);

export const zodMathInlineStringSchema = z
    .string()
    .transform(tempUniversalTransform);

export const zodMathBlockStringSchema = z
    .string()
    .transform(tempUniversalTransform);
