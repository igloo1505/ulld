"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/codeEditorConfig.ts
var _zod = require('zod');
var monacoSupportedLanguage = _zod.z.string();
var _monacoEditorConfigSchemaInner = _zod.z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: _zod.z.boolean().default(false)
});
var monacoEditorConfigSchema = _monacoEditorConfigSchemaInner.default({});
var monacoEditorConfigSchemaOutput = _zod.z.object({
  defaultLangauge: monacoSupportedLanguage,
  useVimMode: _zod.z.boolean()
});




exports.monacoEditorConfigSchema = monacoEditorConfigSchema; exports.monacoEditorConfigSchemaOutput = monacoEditorConfigSchemaOutput;
//# sourceMappingURL=chunk-GKX7P5CV.cjs.map