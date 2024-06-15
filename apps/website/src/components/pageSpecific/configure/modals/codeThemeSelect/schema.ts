import themes from "@ulld/utilities/shikiThemes";
import { z } from "zod";

export const themeModalSchema = z.object({
    light: z.enum(themes).default("github-light"),
    dark: z.enum(themes).default("dracula"),
});

export type CodeThemeModalSchema = z.infer<typeof themeModalSchema>
