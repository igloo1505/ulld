import { z } from 'zod'
import { logLevelSchema } from './configUtilitySchemas.js'


export const terminalConfigSchema = z.object({
    logLevel: logLevelSchema.default("info")
}).default({})
