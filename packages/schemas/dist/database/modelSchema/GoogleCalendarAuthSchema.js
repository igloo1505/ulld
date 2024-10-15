import { z } from 'zod';
/////////////////////////////////////////
// GOOGLE CALENDAR AUTH SCHEMA
/////////////////////////////////////////
export const GoogleCalendarAuthSchema = z.object({
    id: z.number().int(),
    auth: z.string().nullable(),
});
/////////////////////////////////////////
// GOOGLE CALENDAR AUTH PARTIAL SCHEMA
/////////////////////////////////////////
export const GoogleCalendarAuthPartialSchema = GoogleCalendarAuthSchema.partial();
export default GoogleCalendarAuthSchema;
