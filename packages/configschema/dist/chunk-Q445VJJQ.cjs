"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUFNRIBN3cjs = require('./chunk-UFNRIBN3.cjs');



var _chunkGKX7P5CVcjs = require('./chunk-GKX7P5CV.cjs');

// src/zod/codeConfig.ts
var _zod = require('zod');
var _shikiLanguages = require('@ulld/utilities/shikiLanguages'); var _shikiLanguages2 = _interopRequireDefault(_shikiLanguages);
var defaultThemes = {
  dark: "dracula",
  light: "material-theme-lighter"
};
var codeThemeField = _zod.z.object({
  dark: _chunkUFNRIBN3cjs.shikiThemeValidator.default(defaultThemes.dark).describe(
    "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."
  ),
  light: _chunkUFNRIBN3cjs.shikiThemeValidator.default(defaultThemes.light).describe(
    "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."
  )
});
var codeThemeFieldOutput = _zod.z.object({
  dark: _chunkUFNRIBN3cjs.shikiThemeValidator,
  light: _chunkUFNRIBN3cjs.shikiThemeValidator
});
var shikiTransformersField = _zod.z.object({
  regexHighlight: _zod.z.boolean().describe("shiki#transformerMetaWordHighlight").default(true),
  lineHighlight: _zod.z.boolean().describe("shiki#transformerMetaHighlight").default(true),
  lineFocus: _zod.z.boolean().describe("shiki#transformerNotationFocus").default(false),
  lineErrorLevel: _zod.z.boolean().describe("shiki#transformerNotationErrorLevel").default(false),
  lineDiff: _zod.z.boolean().describe("shiki#transformerNotationDiff").default(false)
});
var shikiTransformersFieldOutput = _zod.z.object({
  regexHighlight: _zod.z.boolean(),
  lineHighlight: _zod.z.boolean(),
  lineFocus: _zod.z.boolean(),
  lineErrorLevel: _zod.z.boolean(),
  lineDiff: _zod.z.boolean()
});
var defaultLanguageOutputField = _zod.z.object({
  inline: _zod.z.enum(_shikiLanguages2.default),
  block: _zod.z.enum(_shikiLanguages2.default)
});
var syntaxHighlightingField = _zod.z.object({
  transformers: shikiTransformersField.default({}),
  defaultLanguage: _zod.z.enum(_shikiLanguages2.default).or(
    defaultLanguageOutputField
  ).default({
    inline: "zsh",
    block: "python"
  }).transform((x) => {
    return typeof x === "string" ? {
      block: x,
      inline: x
    } : x;
  })
});
var syntaxHighlightingFieldOutput = _zod.z.object({
  transformers: shikiTransformersFieldOutput,
  defaultLanguage: defaultLanguageOutputField
});
var code_config_schema = _zod.z.object({
  theme: codeThemeField.default({
    dark: "dracula",
    light: "material-theme-lighter"
  }),
  editor: _chunkGKX7P5CVcjs.monacoEditorConfigSchema,
  syntaxHighlighting: syntaxHighlightingField.default({})
});
var codeConfigSchema = code_config_schema.default({});
var codeConfigSchemaOutput = code_config_schema.merge(_zod.z.object({
  theme: codeThemeFieldOutput,
  editor: _chunkGKX7P5CVcjs.monacoEditorConfigSchemaOutput,
  syntaxHighlighting: syntaxHighlightingFieldOutput
}));






exports.defaultThemes = defaultThemes; exports.code_config_schema = code_config_schema; exports.codeConfigSchema = codeConfigSchema; exports.codeConfigSchemaOutput = codeConfigSchemaOutput;
//# sourceMappingURL=chunk-Q445VJJQ.cjs.map