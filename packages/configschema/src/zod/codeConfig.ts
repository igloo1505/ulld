import { z } from "zod";
import { monacoEditorConfigSchema } from "./codeEditorConfig";

export const availableShikiThemes = [
    "andromeeda",
    "aurora-x",
    "ayu-dark",
    "catppuccin-frappe",
    "catppuccin-latte",
    "catppuccin-macchiato",
    "catppuccin-mocha",
    "dark-plus",
    "dracula",
    "dracula-soft",
    "github-dark",
    "github-dark-dimmed",
    "github-light",
    "light-plus",
    "material-theme",
    "material-theme-darker",
    "material-theme-lighter",
    "material-theme-ocean",
    "material-theme-palenight",
    "min-dark",
    "min-light",
    "monokai",
    "night-owl",
    "nord",
    "one-dark-pro",
    "poimandres",
    "red",
    "rose-pine",
    "rose-pine-dawn",
    "rose-pine-moon",
    "slack-dark",
    "slack-ochin",
    "solarized-dark",
    "solarized-light",
    "synthwave-84",
    "tokyo-night",
    "vesper",
    "vitesse-black",
    "vitesse-dark",
    "vitesse-light",
] as const;

export const shikiThemeValidator = z.union([
    z.literal("andromeeda"),
    z.literal("aurora-x"),
    z.literal("ayu-dark"),
    z.literal("catppuccin-frappe"),
    z.literal("catppuccin-latte"),
    z.literal("catppuccin-macchiato"),
    z.literal("catppuccin-mocha"),
    z.literal("dark-plus"),
    z.literal("dracula"),
    z.literal("dracula-soft"),
    z.literal("github-dark"),
    z.literal("github-dark-dimmed"),
    z.literal("github-light"),
    z.literal("light-plus"),
    z.literal("material-theme"),
    z.literal("material-theme-darker"),
    z.literal("material-theme-lighter"),
    z.literal("material-theme-ocean"),
    z.literal("material-theme-palenight"),
    z.literal("min-dark"),
    z.literal("min-light"),
    z.literal("monokai"),
    z.literal("night-owl"),
    z.literal("nord"),
    z.literal("one-dark-pro"),
    z.literal("poimandres"),
    z.literal("red"),
    z.literal("rose-pine"),
    z.literal("rose-pine-dawn"),
    z.literal("rose-pine-moon"),
    z.literal("slack-dark"),
    z.literal("slack-ochin"),
    z.literal("solarized-dark"),
    z.literal("solarized-light"),
    z.literal("synthwave-84"),
    z.literal("tokyo-night"),
    z.literal("vesper"),
    z.literal("vitesse-black"),
    z.literal("vitesse-dark"),
    z.literal("vitesse-light"),
]);

const code_config_schema = z.object({
    theme: z
        .object({
            dark: shikiThemeValidator
                .default("dracula")
                .describe(
                    "Syntax highlighting theme to be used when in dark mode. Can be overriden with the ?shikiHlDark=dracula search param.",
                ),
            light: shikiThemeValidator
                .default("material-theme-lighter")
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
