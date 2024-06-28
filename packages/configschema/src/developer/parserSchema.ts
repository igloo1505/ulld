import {z} from 'zod'
import { ParserConfig } from './types/parserConfig'


export const parserExtensionSchema: z.ZodType<ParserConfig> = z.object({
    export: z.string().describe("The export in your package.json that exports the parser function. The parsing function must be the file's default export."),
    async: z.boolean().default(false),
    conditions: z.object({
        frontMatter: z.string().optional(),
    }).default({})
})
