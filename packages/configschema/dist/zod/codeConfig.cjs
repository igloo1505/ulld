'use strict';

var zod = require('zod');
var shikiLanguages = require('@ulld/utilities/shikiLanguages');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var shikiLanguages__default = /*#__PURE__*/_interopDefault(shikiLanguages);

// src/zod/codeConfig.ts
var monacoSupportedLanguage = zod.z.string();
var monacoEditorConfigSchema = zod.z.object({
  defaultLangauge: monacoSupportedLanguage.default("python"),
  useVimMode: zod.z.boolean().default(false)
}).default({});
var shikiThemeValidator = zod.z.union([
  zod.z.literal("andromeeda"),
  zod.z.literal("aurora-x"),
  zod.z.literal("ayu-dark"),
  zod.z.literal("catppuccin-frappe"),
  zod.z.literal("catppuccin-latte"),
  zod.z.literal("catppuccin-macchiato"),
  zod.z.literal("catppuccin-mocha"),
  zod.z.literal("dark-plus"),
  zod.z.literal("dracula"),
  zod.z.literal("dracula-soft"),
  zod.z.literal("github-dark"),
  zod.z.literal("github-dark-dimmed"),
  zod.z.literal("github-light"),
  zod.z.literal("light-plus"),
  zod.z.literal("material-theme"),
  zod.z.literal("material-theme-darker"),
  zod.z.literal("material-theme-lighter"),
  zod.z.literal("material-theme-ocean"),
  zod.z.literal("material-theme-palenight"),
  zod.z.literal("min-dark"),
  zod.z.literal("min-light"),
  zod.z.literal("monokai"),
  zod.z.literal("night-owl"),
  zod.z.literal("nord"),
  zod.z.literal("one-dark-pro"),
  zod.z.literal("poimandres"),
  zod.z.literal("red"),
  zod.z.literal("rose-pine"),
  zod.z.literal("rose-pine-dawn"),
  zod.z.literal("rose-pine-moon"),
  zod.z.literal("slack-dark"),
  zod.z.literal("slack-ochin"),
  zod.z.literal("solarized-dark"),
  zod.z.literal("solarized-light"),
  zod.z.literal("synthwave-84"),
  zod.z.literal("tokyo-night"),
  zod.z.literal("vesper"),
  zod.z.literal("vitesse-black"),
  zod.z.literal("vitesse-dark"),
  zod.z.literal("vitesse-light")
]);
var defaultThemes = {
  dark: "dracula",
  light: "material-theme-lighter"
};
var code_config_schema = zod.z.object({
  theme: zod.z.object({
    dark: shikiThemeValidator.default(defaultThemes.dark).describe(
      "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."
    ),
    light: shikiThemeValidator.default(defaultThemes.light).describe(
      "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."
    )
  }).default({
    dark: "dracula",
    light: "material-theme-lighter"
  }),
  editor: monacoEditorConfigSchema,
  syntaxHighlighting: zod.z.object({
    transformers: zod.z.object({
      regexHighlight: zod.z.boolean().describe("shiki#transformerMetaWordHighlight").default(true),
      lineHighlight: zod.z.boolean().describe("shiki#transformerMetaHighlight").default(true),
      lineFocus: zod.z.boolean().describe("shiki#transformerNotationFocus").default(false),
      lineErrorLevel: zod.z.boolean().describe("shiki#transformerNotationErrorLevel").default(false),
      lineDiff: zod.z.boolean().describe("shiki#transformerNotationDiff").default(false)
    }).default({}),
    defaultLanguage: zod.z.enum(shikiLanguages__default.default).or(
      zod.z.object({
        inline: zod.z.enum(shikiLanguages__default.default),
        block: zod.z.enum(shikiLanguages__default.default)
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

exports.codeConfigSchema = codeConfigSchema;
exports.codeConfigSchemaOutput = codeConfigSchemaOutput;
exports.defaultThemes = defaultThemes;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=codeConfig.cjs.map