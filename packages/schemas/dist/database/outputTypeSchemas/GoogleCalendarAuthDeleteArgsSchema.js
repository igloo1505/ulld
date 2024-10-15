import { z } from 'zod';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema = z.object({
    id: z.boolean().optional(),
    auth: z.boolean().optional(),
}).strict();
export const GoogleCalendarAuthDeleteArgsSchema = z.object({
    select: GoogleCalendarAuthSelectSchema.optional(),
    where: GoogleCalendarAuthWhereUniqueInputSchema,
}).strict();
export default GoogleCalendarAuthDeleteArgsSchema;
