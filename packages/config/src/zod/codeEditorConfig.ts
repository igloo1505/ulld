import { z } from 'zod'


const monacoSupportedLanguage = z.string()

export const monacoEditorConfigSchema = z.object({
    defaultLangauge: monacoSupportedLanguage
})
