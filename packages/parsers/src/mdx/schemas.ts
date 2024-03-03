import {z} from 'zod'


export const serializeMdxConfigSchema = z.object({
    dontLoadPlugins: z.enum(["mermaid"]).array(),
    parseFrontMatter: z.boolean().default(false)
})
