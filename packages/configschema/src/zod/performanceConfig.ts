import { z } from 'zod'
import { ZodOutputSchema } from '../types.js'


export const performanceConfigSchema = z.object({
    latexParsingDebounceTimeout: z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing latex content that is expected to change rapidly."),
    mdxParsingDebounceTimeout: z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly.")
}).default({})

export const performanceConfigSchemaOutput: ZodOutputSchema<typeof performanceConfigSchema> = z.object({
    latexParsingDebounceTimeout: z.number().min(0),
    mdxParsingDebounceTimeout: z.number().min(0),
})
