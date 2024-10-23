import { z } from 'zod'
import { ZodOutputSchema } from '../types.js'


const monacoSupportedLanguage = z.string()

const _monacoEditorConfigSchemaInner = z.object({
    defaultLangauge: monacoSupportedLanguage.default("python"),
    useVimMode: z.boolean().default(false)
})

export const monacoEditorConfigSchema = _monacoEditorConfigSchemaInner.default({})


export const monacoEditorConfigSchemaOutput: ZodOutputSchema<typeof monacoEditorConfigSchema> = z.object({
    defaultLangauge: monacoSupportedLanguage,
    useVimMode: z.boolean()
})

