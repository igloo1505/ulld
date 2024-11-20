import { z } from 'zod';
import { ImageAlignmentSchema } from '../inputTypeSchemas/ImageAlignmentSchema'

/////////////////////////////////////////
// SETTINGS SCHEMA
/////////////////////////////////////////

export const SettingsSchema = z.object({
  landingImageAlign: ImageAlignmentSchema,
  id: z.number().int(),
  tooltips: z.boolean(),
  title: z.string(),
  summary_showCitations: z.boolean(),
  summary_showTags: z.boolean(),
  lockedLandingImage: z.string().nullable(),
  cleanOnSync: z.boolean(),
  plotTheme: z.string().nullable(),
  firstSync: z.coerce.date(),
  lastSync: z.coerce.date(),
})

export type Settings = z.infer<typeof SettingsSchema>

/////////////////////////////////////////
// SETTINGS PARTIAL SCHEMA
/////////////////////////////////////////

export const SettingsPartialSchema = SettingsSchema.partial()

export type SettingsPartial = z.infer<typeof SettingsPartialSchema>

export default SettingsSchema;
