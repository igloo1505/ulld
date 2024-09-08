"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/codeEditorConfig.ts
var _zod = require('zod');
var monacoSupportedLanguage = _zod.z.string();
var monacoEditorConfigSchema = _zod.z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: _zod.z.boolean().default(false)
}).default({});



exports.monacoEditorConfigSchema = monacoEditorConfigSchema;
//# sourceMappingURL=chunk-OFDQ7ET3.cjs.map