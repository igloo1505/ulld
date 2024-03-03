import { z } from "zod";

export const addEquationSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
    desc: z.string().optional(),
    content: z.string(),
    equationId: z.string().optional(),
    asPython: z.string().optional(),
    tags: z.string().array().default([]),
    tagInput: z.string(),
    relatedValues: z.object({
        input: z.record(z.string(), z.number()),
        output: z.number()
    }).array().optional(),
    variables: z.string().array(),
    variableInput: z.string(),
    keywords: z.string().array(),
    keywordInput: z.string(),
})
