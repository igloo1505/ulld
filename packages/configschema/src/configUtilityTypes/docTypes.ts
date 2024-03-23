import{z} from 'zod'
import { zodDocTypeInput } from '../zod/documentConfigSchema'
import { internalDocTypes } from '../zod/internalDocumentTypes'



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

