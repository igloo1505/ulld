'use strict';

var zod = require('zod');

// src/zod/codeEditorConfig.ts
var monacoSupportedLanguage = zod.z.string();
var monacoEditorConfigSchema = zod.z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: zod.z.boolean().default(false)
}).default({});

exports.monacoEditorConfigSchema = monacoEditorConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=codeEditorConfig.cjs.map