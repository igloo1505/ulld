import {z} from 'zod'


export const parserExtensionSchema = z.object({
    export: z.string().describe("The export in your package.json that exports the parser function. The parsing function must be the file's default export."),
    async: z.boolean().default(false),
    conditions: z.object({
        frontMatter: z.string().optional(),
    }).default({})
})
