import {makeValidId} from "@ulld/utilities"
import{z} from 'zod'
import { internalDocTypes } from "../zod/secondaryConfigParse/getParsableExtensions"


export const zodDocTypeInput = z.string().transform(makeValidId).brand("DocTypeName")



export type DocTypes = z.output<typeof zodDocTypeInput> | z.output<typeof internalDocTypes>


export const topicZodObject = z.object({
    name: z.string()
})
export const subjectZodObject = z.object({
    value: z.string()
})
export const tagZodObject = z.object({
    value: z.string()
})

