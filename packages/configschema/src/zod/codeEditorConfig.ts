import { z } from 'zod'


const monacoSupportedLanguage = z.string()

export const monacoEditorConfigSchema = z.object({
    defaultLangauge: monacoSupportedLanguage.default("python"),
    useVimMode: z.boolean().default(false)
}).default({})
