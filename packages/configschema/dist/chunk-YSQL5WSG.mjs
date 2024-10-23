// src/zod/codeEditorConfig.ts
import { z } from "zod";
var monacoSupportedLanguage = z.string();
var _monacoEditorConfigSchemaInner = z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: z.boolean().default(false)
});
var monacoEditorConfigSchema = _monacoEditorConfigSchemaInner.default({});
var monacoEditorConfigSchemaOutput = z.object({
  defaultLangauge: monacoSupportedLanguage,
  useVimMode: z.boolean()
});

export {
  monacoEditorConfigSchema,
  monacoEditorConfigSchemaOutput
};
//# sourceMappingURL=chunk-YSQL5WSG.mjs.map