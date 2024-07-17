import { z } from "zod";

export const componentDocumentationSchema = z.object({
    pluginName: z.string(),
    componentName: z.string(),
    embeddableSyntax: z.string().describe("The syntax for the component as it appears in JSX. Synonymous with the regexToInclude property in the developer config.").array(),
    paths: z.object({
        short: z.string().optional(),
        full: z.string().optional()
    }),
    tags: z.string().array().default([])
})
