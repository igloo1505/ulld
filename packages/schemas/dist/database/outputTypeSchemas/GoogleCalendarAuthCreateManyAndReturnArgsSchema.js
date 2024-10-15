import { z } from 'zod';
import { GoogleCalendarAuthCreateManyInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateManyInputSchema.js';
export const GoogleCalendarAuthCreateManyAndReturnArgsSchema = z.object({
    data: z.union([GoogleCalendarAuthCreateManyInputSchema, GoogleCalendarAuthCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default GoogleCalendarAuthCreateManyAndReturnArgsSchema;
