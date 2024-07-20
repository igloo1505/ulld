import { z } from "zod";

export const appMetaSchema = z.object({
    title: z.string().default("Uh Little Less Dum"),
    desc: z.string().optional()
}).default({})
