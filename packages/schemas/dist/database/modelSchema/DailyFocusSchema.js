import { z } from 'zod';
/////////////////////////////////////////
// DAILY FOCUS SCHEMA
/////////////////////////////////////////
export const DailyFocusSchema = z.object({
    value: z.string(),
    createdAt: z.coerce.date(),
});
/////////////////////////////////////////
// DAILY FOCUS PARTIAL SCHEMA
/////////////////////////////////////////
export const DailyFocusPartialSchema = DailyFocusSchema.partial();
export default DailyFocusSchema;
