import { z } from 'zod';

/////////////////////////////////////////
// SETTINGS APPENDIX SCHEMA
/////////////////////////////////////////

export const SettingsAppendixSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SettingsAppendix = z.infer<typeof SettingsAppendixSchema>

/////////////////////////////////////////
// SETTINGS APPENDIX PARTIAL SCHEMA
/////////////////////////////////////////

export const SettingsAppendixPartialSchema = SettingsAppendixSchema.partial()

export type SettingsAppendixPartial = z.infer<typeof SettingsAppendixPartialSchema>

export default SettingsAppendixSchema;
