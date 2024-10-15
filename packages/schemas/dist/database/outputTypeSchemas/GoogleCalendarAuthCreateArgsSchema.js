import { z } from 'zod';
import { GoogleCalendarAuthCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateInputSchema.js';
import { GoogleCalendarAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedCreateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema = z.object({
    id: z.boolean().optional(),
    auth: z.boolean().optional(),
}).strict();
export const GoogleCalendarAuthCreateArgsSchema = z.object({
    select: GoogleCalendarAuthSelectSchema.optional(),
    data: z.union([GoogleCalendarAuthCreateInputSchema, GoogleCalendarAuthUncheckedCreateInputSchema]).optional(),
}).strict();
export default GoogleCalendarAuthCreateArgsSchema;
