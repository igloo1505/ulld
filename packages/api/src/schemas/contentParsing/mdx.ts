import { serializeMdxConfigSchema } from "@ulld/parsers"
import { z } from "zod"

export const zodSerializeMdxInputSchema = z.object({
    content: z.string(),
    rsc: z.boolean().optional(),
    config: serializeMdxConfigSchema.optional()
})
