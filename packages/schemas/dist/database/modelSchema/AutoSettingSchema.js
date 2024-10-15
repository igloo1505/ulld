import { z } from 'zod';
import { autoSettingSchema } from '../inputTypeSchemas/autoSettingSchema.js';
/////////////////////////////////////////
// AUTO SETTING SCHEMA
/////////////////////////////////////////
export const AutoSettingSchema = z.object({
    type: autoSettingSchema,
    id: z.number().int(),
    glob: z.string(),
    value: z.string(),
});
/////////////////////////////////////////
// AUTO SETTING PARTIAL SCHEMA
/////////////////////////////////////////
export const AutoSettingPartialSchema = AutoSettingSchema.partial();
export default AutoSettingSchema;
