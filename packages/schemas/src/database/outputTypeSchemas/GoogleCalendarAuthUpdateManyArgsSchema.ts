import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/GoogleCalendarAuthUpdateManyMutationInputSchema.js
..//inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js
export const GoogleCalendarAuthUpdateManyArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthUpdateManyArgs> = z.object({
  data: z.union([ GoogleCalendarAuthUpdateManyMutationInputSchema,GoogleCalendarAuthUncheckedUpdateManyInputSchema ]),
  where: GoogleCalendarAuthWhereInputSchema.optional(),
}).strict() ;
export default GoogleCalendarAuthUpdateManyArgsSchema;