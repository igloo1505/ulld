import { z } from 'zod'
import { logLevelSchema } from './configUtilitySchemas.js'
import { ZodOutputSchema } from '../types.js'


export const terminalConfigSchema = z.object({
    logLevel: logLevelSchema.default("info")
}).default({})


export const terminalConfigSchemaOutput: ZodOutputSchema<typeof terminalConfigSchema> = z.object({
    logLevel: logLevelSchema
})
