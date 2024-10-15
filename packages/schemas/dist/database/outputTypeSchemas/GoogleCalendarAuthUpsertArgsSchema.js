import { z } from 'zod';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js';
import { GoogleCalendarAuthCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateInputSchema.js';
import { GoogleCalendarAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedCreateInputSchema.js';
import { GoogleCalendarAuthUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema.js';
import { GoogleCalendarAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema.js';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema = z.object({
    id: z.boolean().optional(),
    auth: z.boolean().optional(),
}).strict();
export const GoogleCalendarAuthUpsertArgsSchema = z.object({
    select: GoogleCalendarAuthSelectSchema.optional(),
    where: GoogleCalendarAuthWhereUniqueInputSchema,
    create: z.union([GoogleCalendarAuthCreateInputSchema, GoogleCalendarAuthUncheckedCreateInputSchema]),
    update: z.union([GoogleCalendarAuthUpdateInputSchema, GoogleCalendarAuthUncheckedUpdateInputSchema]),
}).strict();
export default GoogleCalendarAuthUpsertArgsSchema;
