import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// PLUGIN SETTINGS SCHEMA
/////////////////////////////////////////

export const PluginSettingsSchema = z.object({
  pluginName: z.string(),
  /**
   * [PluginSettingsRecord]
   */
  data: JsonValueSchema,
  firstSync: z.coerce.date(),
  lastSync: z.coerce.date(),
})

export type PluginSettings = z.infer<typeof PluginSettingsSchema>

/////////////////////////////////////////
// PLUGIN SETTINGS PARTIAL SCHEMA
/////////////////////////////////////////

export const PluginSettingsPartialSchema = PluginSettingsSchema.partial()

export type PluginSettingsPartial = z.infer<typeof PluginSettingsPartialSchema>

export default PluginSettingsSchema;
