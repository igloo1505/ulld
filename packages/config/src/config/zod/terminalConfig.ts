import { z } from 'zod'
import { logLevelSchema } from './configUtilitySchemas'


export const terminalConfigSchema = z.object({
    logLevel: logLevelSchema.default("info")
}).default({})
