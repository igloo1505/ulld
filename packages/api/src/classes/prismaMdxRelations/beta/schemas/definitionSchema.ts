import {z} from 'zod'
import { mdxNotePropsSchema } from './general'


export const definitionSchema = z.object({
    id: z.string(),
    label: z.string().nullish(),
    content: z.string().nullish(),
    alphabeticalLabel: z.string().nullish(),
    mdxNote: mdxNotePropsSchema.array(),
    mdxNoteId: z.number().int().nullish()
})
