import { z } from "zod";
import { ZodOutputSchema } from "../types.js";

export const appMetaSchema = z.object({
    title: z.string().default("Uh Little Less Dum"),
    desc: z.string().optional()
}).default({})



export const appMetaSchemaOutput: ZodOutputSchema<typeof appMetaSchema> = z.object({
    title: z.string(),
    desc: z.string().optional()
})
