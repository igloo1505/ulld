import {
  shikiThemeValidator
} from "./chunk-UUFTJZTI.mjs";
import {
  monacoEditorConfigSchema,
  monacoEditorConfigSchemaOutput
} from "./chunk-YSQL5WSG.mjs";

// src/zod/codeConfig.ts
import { z } from "zod";
import shikiLanguages from "@ulld/utilities/shikiLanguages";
var defaultThemes = {
  dark: "dracula",
  light: "material-theme-lighter"
};
var codeThemeField = z.object({
  dark: shikiThemeValidator.default(defaultThemes.dark).describe(
    "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."
  ),
  light: shikiThemeValidator.default(defaultThemes.light).describe(
    "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."
  )
});
var codeThemeFieldOutput = z.object({
  dark: shikiThemeValidator,
  light: shikiThemeValidator
});
var shikiTransformersField = z.object({
  regexHighlight: z.boolean().describe("shiki#transformerMetaWordHighlight").default(true),
  lineHighlight: z.boolean().describe("shiki#transformerMetaHighlight").default(true),
  lineFocus: z.boolean().describe("shiki#transformerNotationFocus").default(false),
  lineErrorLevel: z.boolean().describe("shiki#transformerNotationErrorLevel").default(false),
  lineDiff: z.boolean().describe("shiki#transformerNotationDiff").default(false)
});
var shikiTransformersFieldOutput = z.object({
  regexHighlight: z.boolean(),
  lineHighlight: z.boolean(),
  lineFocus: z.boolean(),
  lineErrorLevel: z.boolean(),
  lineDiff: z.boolean()
});
var defaultLanguageOutputField = z.object({
  inline: z.enum(shikiLanguages),
  block: z.enum(shikiLanguages)
});
var syntaxHighlightingField = z.object({
  transformers: shikiTransformersField.default({}),
  defaultLanguage: z.enum(shikiLanguages).or(
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
var syntaxHighlightingFieldOutput = z.object({
  transformers: shikiTransformersFieldOutput,
  defaultLanguage: defaultLanguageOutputField
});
var code_config_schema = z.object({
  theme: codeThemeField.default({
    dark: "dracula",
    light: "material-theme-lighter"
  }),
  editor: monacoEditorConfigSchema,
  syntaxHighlighting: syntaxHighlightingField.default({})
});
var codeConfigSchema = code_config_schema.default({});
var codeConfigSchemaOutput = code_config_schema.merge(z.object({
  theme: codeThemeFieldOutput,
  editor: monacoEditorConfigSchemaOutput,
  syntaxHighlighting: syntaxHighlightingFieldOutput
}));

export {
  defaultThemes,
  code_config_schema,
  codeConfigSchema,
  codeConfigSchemaOutput
};
//# sourceMappingURL=chunk-YPPW64VT.mjs.map