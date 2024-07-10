import { z } from "zod";

export const settingsPageOutputSchema = z.object({
    label: z.string(),
    href: z.string()
})
