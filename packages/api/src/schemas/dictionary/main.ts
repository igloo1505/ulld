import { z } from "zod";


export const dictionaryDefinitionReturnType = z.object({
    id: z.string(),
    label: z.string().optional(),
    content: z.string().optional(),
    mdxNoteId: z.number().nullable()
})

export type DictionaryDefinitionReturnType = z.output<typeof dictionaryDefinitionReturnType>
