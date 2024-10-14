import { z } from 'zod';
import { autoSettingSchema } from '../inputTypeSchemas/autoSettingSchema'

/////////////////////////////////////////
// AUTO SETTING SCHEMA
/////////////////////////////////////////

export const AutoSettingSchema = z.object({
  type: autoSettingSchema,
  id: z.number().int(),
  glob: z.string(),
  value: z.string(),
})

export type AutoSetting = z.infer<typeof AutoSettingSchema>

/////////////////////////////////////////
// AUTO SETTING PARTIAL SCHEMA
/////////////////////////////////////////

export const AutoSettingPartialSchema = AutoSettingSchema.partial()

export type AutoSettingPartial = z.infer<typeof AutoSettingPartialSchema>

export default AutoSettingSchema;
