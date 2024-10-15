import { z } from 'zod';
/////////////////////////////////////////
// SETTINGS APPENDIX SCHEMA
/////////////////////////////////////////
export const SettingsAppendixSchema = z.object({
    id: z.string(),
    data: z.instanceof(Buffer),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
/////////////////////////////////////////
// SETTINGS APPENDIX PARTIAL SCHEMA
/////////////////////////////////////////
export const SettingsAppendixPartialSchema = SettingsAppendixSchema.partial();
export default SettingsAppendixSchema;
