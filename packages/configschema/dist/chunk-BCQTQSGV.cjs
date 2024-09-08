"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunkUFNRIBN3cjs = require('./chunk-UFNRIBN3.cjs');


var _chunkJU76D7R4cjs = require('./chunk-JU76D7R4.cjs');

// src/zod/codeConfig.ts
var _zod = require('zod');
var _shikiLanguages = require('@ulld/utilities/shikiLanguages'); var _shikiLanguages2 = _interopRequireDefault(_shikiLanguages);
var defaultThemes = {
  dark: "dracula",
  light: "material-theme-lighter"
};
var code_config_schema = _zod.z.object({
  theme: _zod.z.object({
    dark: _chunkUFNRIBN3cjs.shikiThemeValidator.default(defaultThemes.dark).describe(
      "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."
    ),
    light: _chunkUFNRIBN3cjs.shikiThemeValidator.default(defaultThemes.light).describe(
      "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."
    )
  }).default({
    dark: "dracula",
    light: "material-theme-lighter"
  }),
  editor: _chunkJU76D7R4cjs.monacoEditorConfigSchema,
  syntaxHighlighting: _zod.z.object({
    transformers: _zod.z.object({
      regexHighlight: _zod.z.boolean().describe("shiki#transformerMetaWordHighlight").default(true),
      lineHighlight: _zod.z.boolean().describe("shiki#transformerMetaHighlight").default(true),
      lineFocus: _zod.z.boolean().describe("shiki#transformerNotationFocus").default(false),
      lineErrorLevel: _zod.z.boolean().describe("shiki#transformerNotationErrorLevel").default(false),
      lineDiff: _zod.z.boolean().describe("shiki#transformerNotationDiff").default(false)
    }).default({}),
    defaultLanguage: _zod.z.enum(_shikiLanguages2.default).or(
      _zod.z.object({
        inline: _zod.z.enum(_shikiLanguages2.default),
        block: _zod.z.enum(_shikiLanguages2.default)
      })
    ).default({
      inline: "zsh",
      block: "python"
    }).transform((x) => {
      return typeof x === "string" ? {
        block: x,
        inline: x
      } : x;
    })
  }).default({})
});
var codeConfigSchema = code_config_schema.default({});
var codeConfigSchemaOutput = code_config_schema.required({
  editor: true
});





exports.defaultThemes = defaultThemes; exports.codeConfigSchema = codeConfigSchema; exports.codeConfigSchemaOutput = codeConfigSchemaOutput;
//# sourceMappingURL=chunk-BCQTQSGV.cjs.map