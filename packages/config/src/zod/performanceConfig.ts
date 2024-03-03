import { z } from 'zod'


export const performanceConfigSchema = z.object({
    latexParsingDebounceTimeout: z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing latex content that is expected to change rapidly."),
    mdxParsingDebounceTimeout: z.number().min(0).default(500).describe("The period to wait in milliseconds between parsing markdown and mdx content that is expected to change rapidly.")
}).default({})
