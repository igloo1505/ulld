import { transformer, z } from "zod";
import { monacoEditorConfigSchema, monacoEditorConfigSchemaOutput } from "./codeEditorConfig.js";
import { shikiThemeValidator } from "./codeThemeSchemas.js";
import shikiLanguages from "@ulld/utilities/shikiLanguages";
import { ZodOutputSchema } from "../types.js";

export const defaultThemes: {
    dark: z.output<typeof shikiThemeValidator>;
    light: z.output<typeof shikiThemeValidator>;
} = {
    dark: "dracula",
    light: "material-theme-lighter",
};


const codeThemeField = z
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

const codeThemeFieldOutput = z.object({
    dark: shikiThemeValidator,
    light: shikiThemeValidator
})

const shikiTransformersField = z
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

const shikiTransformersFieldOutput: ZodOutputSchema<typeof shikiTransformersField> = z.object({
                    regexHighlight: z
                        .boolean(),
                    lineHighlight: z
                        .boolean(),
                    lineFocus: z
                        .boolean(),
                    lineErrorLevel: z
                        .boolean(),
                    lineDiff: z
                        .boolean()
})

const defaultLanguageOutputField =  z.object({
                        inline: z.enum(shikiLanguages),
                        block: z.enum(shikiLanguages),
                    })


const syntaxHighlightingField = z
        .object({
            transformers: shikiTransformersField.default({}),
            defaultLanguage: z
                .enum(shikiLanguages)
                .or(
                   defaultLanguageOutputField,
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

const syntaxHighlightingFieldOutput: ZodOutputSchema<typeof syntaxHighlightingField> = z.object({
    transformers: shikiTransformersFieldOutput,
    defaultLanguage: defaultLanguageOutputField
})

export const code_config_schema = z.object({
    theme: codeThemeField
        .default({
            dark: "dracula",
            light: "material-theme-lighter",
        }),
    editor: monacoEditorConfigSchema,
    syntaxHighlighting: syntaxHighlightingField 
        .default({}),
});

export const codeConfigSchema = code_config_schema.default({});

export const codeConfigSchemaOutput: ZodOutputSchema<typeof codeConfigSchema> = code_config_schema.merge(z.object({
    theme: codeThemeFieldOutput,
    editor: monacoEditorConfigSchemaOutput,
    syntaxHighlighting: syntaxHighlightingFieldOutput
}));

export type CodeConfigSchema = z.infer<typeof codeConfigSchema>;
export type CodeConfigSchemaInput = z.input<typeof codeConfigSchema>;
export type CodeConfigSchemaOutput = z.output<typeof codeConfigSchema>;
