import { z } from 'zod';

export const autoSettingSchema = z.enum(['tag','topic','subject']);

export type autoSettingType = `${z.infer<typeof autoSettingSchema>}`

export default autoSettingSchema;
