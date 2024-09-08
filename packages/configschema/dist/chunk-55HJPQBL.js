// src/zod/codeEditorConfig.ts
import { z } from "zod";
var monacoSupportedLanguage = z.string();
var monacoEditorConfigSchema = z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: z.boolean().default(false)
}).default({});

export {
  monacoEditorConfigSchema
};
//# sourceMappingURL=chunk-55HJPQBL.js.map