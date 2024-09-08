import { z } from 'zod';

// src/zod/codeEditorConfig.ts
var monacoSupportedLanguage = z.string();
var monacoEditorConfigSchema = z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: z.boolean().default(false)
}).default({});

export { monacoEditorConfigSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-55HJPQBL.js.map