import { z } from 'zod';

/////////////////////////////////////////
// GOOGLE CALENDAR AUTH SCHEMA
/////////////////////////////////////////

export const GoogleCalendarAuthSchema = z.object({
  id: z.number().int(),
  auth: z.string().nullable(),
})

export type GoogleCalendarAuth = z.infer<typeof GoogleCalendarAuthSchema>

/////////////////////////////////////////
// GOOGLE CALENDAR AUTH PARTIAL SCHEMA
/////////////////////////////////////////

export const GoogleCalendarAuthPartialSchema = GoogleCalendarAuthSchema.partial()

export type GoogleCalendarAuthPartial = z.infer<typeof GoogleCalendarAuthPartialSchema>

export default GoogleCalendarAuthSchema;
