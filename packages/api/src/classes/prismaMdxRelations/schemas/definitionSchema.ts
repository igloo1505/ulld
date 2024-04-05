import {z} from 'zod'
import { mdxNotePropsSchema } from './general'
import { MdxNote } from '../MdxNote'


export const definitionZodObject = z.object({
    id: z.string(),
    label: z.string().nullish(),
    content: z.string().nullish(),
    alphabeticalLabel: z.string().nullish(),
    mdxNote: mdxNotePropsSchema.nullish().transform((a) => a ? new MdxNote(a) : undefined),
    mdxNoteId: z.number().int().nullish()
})


export type DefinitionZodObjectOutput = z.output<typeof definitionZodObject>
