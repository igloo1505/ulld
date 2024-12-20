import { z } from "zod";
import { ZodOutputSchema } from "../../types.js";

export const tableUIConfigSchema = z.object({
    maxHeight: z.union([z.string(), z.number()]).default(300).describe("The default height at which to limit tables. This can be overridden for each not individually in that note's front matter. If the value is a string, it must be able to be interpretted by css-in-tsx syntax. Numbers will automatically be interpreted as pixels.").transform((a) => typeof a === "number" ? `${a}px` : a)
}).default({})



export const tableUIConfigSchemaOutput: ZodOutputSchema<typeof tableUIConfigSchema> = z.object({
    maxHeight: z.string()
})
