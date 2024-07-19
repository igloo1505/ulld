import { z } from "zod";

export const settingsPageOutputSchema = z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    href: z.string(),
    pluginName: z.string()
})
