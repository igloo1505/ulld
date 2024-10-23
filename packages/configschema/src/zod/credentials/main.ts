import { z } from 'zod'
import { ZodOutputSchema } from '../../types.js'



export const credentialsConfigSchema = z.object({
    googleServiceAccountJsonPath: z.string().optional().describe("Path to the service account credentials file to enable calendar integration.")
}).default({})



export const credentialsConfigSchemaOutput: ZodOutputSchema<typeof credentialsConfigSchema> = z.object({
    googleServiceAccountJsonPath: z.string().optional()
})
