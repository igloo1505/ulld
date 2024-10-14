import { z } from 'zod';

/////////////////////////////////////////
// DAILY FOCUS SCHEMA
/////////////////////////////////////////

export const DailyFocusSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date(),
})

export type DailyFocus = z.infer<typeof DailyFocusSchema>

/////////////////////////////////////////
// DAILY FOCUS PARTIAL SCHEMA
/////////////////////////////////////////

export const DailyFocusPartialSchema = DailyFocusSchema.partial()

export type DailyFocusPartial = z.infer<typeof DailyFocusPartialSchema>

export default DailyFocusSchema;
