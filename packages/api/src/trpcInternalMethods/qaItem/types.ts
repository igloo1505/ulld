import { zodMdxBlockStringSchema, zodMdxBlockTransform } from "@ulld/parsers"
import { serverClient } from "../../trpc/serverClient"
import {z} from 'zod'


export interface FlipCardParams {
    tags?: string[] | string
}


export const qaSchema = z.object({
    question: zodMdxBlockStringSchema,
    answer: zodMdxBlockStringSchema,
    description: z.string().optional().transform(zodMdxBlockTransform),
    tags: z.string().array(),
    topics: z.string().array(),
    subjects: z.string().array(),
    id: z.string().optional().nullable()
})


export type QAPairInput = z.input<typeof qaSchema>
export type QAPairOutput = z.output<typeof qaSchema>


export type FlipCardReturnItem = Awaited<ReturnType<typeof serverClient.qa.getSpecificQA>>



