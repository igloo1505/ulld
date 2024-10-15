import { z } from 'zod';
import { GoogleCalendarAuthUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema.js';
import { GoogleCalendarAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema.js';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema = z.object({
    id: z.boolean().optional(),
    auth: z.boolean().optional(),
}).strict();
export const GoogleCalendarAuthUpdateArgsSchema = z.object({
    select: GoogleCalendarAuthSelectSchema.optional(),
    data: z.union([GoogleCalendarAuthUpdateInputSchema, GoogleCalendarAuthUncheckedUpdateInputSchema]),
    where: GoogleCalendarAuthWhereUniqueInputSchema,
}).strict();
export default GoogleCalendarAuthUpdateArgsSchema;
