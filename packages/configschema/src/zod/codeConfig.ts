import { z } from "zod";
import { monacoEditorConfigSchema } from "./codeEditorConfig.js";
import { shikiThemeValidator } from "./codeThemeSchemas.js";
import shikiLanguages from "@ulld/utilities/shikiLanguages";

export const defaultThemes: {
    dark: z.output<typeof shikiThemeValidator>;
    light: z.output<typeof shikiThemeValidator>;
} = {
    dark: "dracula",
    light: "material-theme-lighter",
};

const code_config_schema = z.object({
    theme: z
        .object({
            dark: shikiThemeValidator
                .default(defaultThemes.dark)
                .describe(
                    "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param.",
                ),
            light: shikiThemeValidator
                .default(defaultThemes.light)
                .describe(
                    "Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param.",
                ),
        })
        .default({
            dark: "dracula",
            light: "material-theme-lighter",
        }),
    editor: monacoEditorConfigSchema,
    syntaxHighlighting: z
        .object({
            transformers: z
                .object({
                    regexHighlight: z
                        .boolean()
                        .describe("shiki#transformerMetaWordHighlight")
                        .default(true),
                    lineHighlight: z
                        .boolean()
                        .describe("shiki#transformerMetaHighlight")
                        .default(true),
                    lineFocus: z
                        .boolean()
                        .describe("shiki#transformerNotationFocus")
                        .default(false),
                    lineErrorLevel: z
                        .boolean()
                        .describe("shiki#transformerNotationErrorLevel")
                        .default(false),
                    lineDiff: z
                        .boolean()
                        .describe("shiki#transformerNotationDiff")
                        .default(false),
                })
                .default({}),
            defaultLanguage: z
                .enum(shikiLanguages)
                .or(
                    z.object({
                        inline: z.enum(shikiLanguages),
                        block: z.enum(shikiLanguages),
                    }),
                )
                .default({
                    inline: "zsh",
                    block: "python",
                })
                .transform((x) => {
                    return typeof x === "string"
                        ? {
                            block: x,
                            inline: x,
                        }
                        : x;
                }),
        })
        .default({}),
});

export const codeConfigSchema = code_config_schema.default({});

export const codeConfigSchemaOutput = code_config_schema.required({
    editor: true,
});

export type CodeConfigSchema = z.infer<typeof codeConfigSchema>;
export type CodeConfigSchemaInput = z.input<typeof codeConfigSchema>;
export type CodeConfigSchemaOutput = z.output<typeof codeConfigSchema>;
