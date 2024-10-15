import { z } from 'zod';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js';
export const GoogleCalendarAuthDeleteManyArgsSchema = z.object({
    where: GoogleCalendarAuthWhereInputSchema.optional(),
}).strict();
export default GoogleCalendarAuthDeleteManyArgsSchema;
