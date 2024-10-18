import {z} from 'zod'
import type { UpdatePluginSettingOptions } from './types'


export const updatePluginSettingOptionsSchema: z.ZodType<UpdatePluginSettingOptions> = z.object({
    merge: z.boolean().default(true)
})


export type UpdatePluginSettingOptionsSchema = z.infer<typeof updatePluginSettingOptionsSchema>
