import { z } from 'zod';
import { GoogleCalendarAuthUpdateManyMutationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUpdateManyMutationInputSchema.js';
import { GoogleCalendarAuthUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateManyInputSchema.js';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js';
export const GoogleCalendarAuthUpdateManyArgsSchema = z.object({
    data: z.union([GoogleCalendarAuthUpdateManyMutationInputSchema, GoogleCalendarAuthUncheckedUpdateManyInputSchema]),
    where: GoogleCalendarAuthWhereInputSchema.optional(),
}).strict();
export default GoogleCalendarAuthUpdateManyArgsSchema;
