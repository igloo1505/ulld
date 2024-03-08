import { z } from "zod";
import { zodMdxFieldSchemaOptional } from "@ulld/parsers"


export const dictionaryDefinitionReturnType = z.object({
    id: z.string(),
    label: zodMdxFieldSchemaOptional,
    content: zodMdxFieldSchemaOptional,
    mdxNoteId: z.number().nullable()
})

export type DictionaryDefinitionReturnType = z.output<typeof dictionaryDefinitionReturnType>
