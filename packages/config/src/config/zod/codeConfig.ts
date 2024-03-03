import { z } from 'zod'
import { monacoEditorConfigSchema } from './codeEditorConfig'

export const availableShikiThemes = [
    "dark-plus",
    "dracula-soft",
    "dracula",
    "github-dark-dimmed",
    "github-dark",
    "github-light",
    "hc_light",
    "light-plus",
    "material-theme-darker",
    "material-theme-lighter",
    "material-theme-ocean",
    "material-theme-palenight",
    "material-theme-lighter",
    "material-theme",
    "min-dark",
    "min-light",
    "monokai",
    "nord",
    "one-dark-pro",
    "poimandres",
    "rose-pine-dawn",
    "rose-pine-moon",
    "rose-pine",
    "slack-dark",
    "slack-ochin",
    "solarized-dark",
    "solarized-light",
    "vitesse-dark",
    "vitesse-light",
] as const

export const shikiThemeValidator = z.union([
    z.literal("dark-plus"),
    z.literal("dracula-soft"),
    z.literal("dracula"),
    z.literal("github-dark-dimmed"),
    z.literal("github-dark"),
    z.literal("github-light"),
    z.literal("hc_light"),
    z.literal("light-plus"),
    z.literal("material-theme-darker"),
    z.literal("material-theme-lighter"),
    z.literal("material-theme-ocean"),
    z.literal("material-theme-palenight"),
    z.literal("material-theme-lighter"),
    z.literal("material-theme"),
    z.literal("min-dark"),
    z.literal("min-light"),
    z.literal("monokai"),
    z.literal("nord"),
    z.literal("one-dark-pro"),
    z.literal("poimandres"),
    z.literal("rose-pine-dawn"),
    z.literal("rose-pine-moon"),
    z.literal("rose-pine"),
    z.literal("slack-dark"),
    z.literal("slack-ochin"),
    z.literal("solarized-dark"),
    z.literal("solarized-light"),
    z.literal("vitesse-dark"),
    z.literal("vitesse-light"),
])


const code_config_schema = z.object({
    theme: z.object({
        dark: shikiThemeValidator.default("dracula").describe("Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param."),
        light: shikiThemeValidator.default("material-theme-lighter").describe("Syntax highlighting theme to be used when in light mode. Can be overriden with the ?shikiHlLight=nord search param."),
    }).default({
        dark: "dracula",
        light: "material-theme-lighter"
    }),
    editor: monacoEditorConfigSchema.optional()
})

export const codeConfigSchema = code_config_schema.default({})


export const codeConfigSchemaOutput = code_config_schema.required({
    editor: true
})
