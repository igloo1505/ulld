import { serverClient } from "#/trpc/serverClient"
import { z } from "zod"
import { getZodArrayUnionSchema, mdxBlockStringSchema, mdxInlineStringSchema } from "@ulld/utilities"

export const qaInputSchema = z.object({
    question: mdxBlockStringSchema,
    answer: mdxBlockStringSchema,
    description: mdxInlineStringSchema,
    tags: getZodArrayUnionSchema(z.string()),
    topics: getZodArrayUnionSchema(z.string()),
    subjects: getZodArrayUnionSchema(z.string()),
    id: z.string().optional()
})

export type QAPairInput = z.input<typeof qaInputSchema>
export type QAPairOutput = z.output<typeof qaInputSchema>

export type FlipCardReturnItem = Awaited<ReturnType<typeof serverClient.qa.getSpecificQA>>
