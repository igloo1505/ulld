import {
  shikiThemeValidator
} from "./chunk-D57TGXVB.js";
import {
  monacoEditorConfigSchema
} from "./chunk-55HJPQBL.js";

// src/zod/codeConfig.ts
import { z } from "zod";
import shikiLanguages from "@ulld/utilities/shikiLanguages";
var defaultThemes = {
  dark: "dracula",
  light: "material-theme-lighter"
};
var code_config_schema = z.object({
  theme: z.object({
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
  syntaxHighlighting: z.object({
    transformers: z.object({
      regexHighlight: z.boolean().describe("shiki#transformerMetaWordHighlight").default(true),
      lineHighlight: z.boolean().describe("shiki#transformerMetaHighlight").default(true),
      lineFocus: z.boolean().describe("shiki#transformerNotationFocus").default(false),
      lineErrorLevel: z.boolean().describe("shiki#transformerNotationErrorLevel").default(false),
      lineDiff: z.boolean().describe("shiki#transformerNotationDiff").default(false)
    }).default({}),
    defaultLanguage: z.enum(shikiLanguages).or(
      z.object({
        inline: z.enum(shikiLanguages),
        block: z.enum(shikiLanguages)
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

export {
  defaultThemes,
  codeConfigSchema,
  codeConfigSchemaOutput
};
//# sourceMappingURL=chunk-C7Q6EMMC.js.map