import { z } from "zod";
import { monacoEditorConfigSchema } from "./codeEditorConfig";
import { shikiThemeValidator } from "./codeThemeSchemas";



export const defaultThemes: {
    dark: z.output<typeof shikiThemeValidator>
    light: z.output<typeof shikiThemeValidator>
} = {
    dark: "dracula",
    light: "material-theme-lighter"
}

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
    editor: monacoEditorConfigSchema.optional(),
});

export const codeConfigSchema = code_config_schema.default({});

export const codeConfigSchemaOutput = code_config_schema.required({
    editor: true,
});


export type CodeConfigSchema = z.infer<typeof codeConfigSchema>
export type CodeConfigSchemaInput = z.input<typeof codeConfigSchema>
export type CodeConfigSchemaOutput = z.output<typeof codeConfigSchema>

