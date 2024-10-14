import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthUpdateManyMutationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUpdateManyMutationInputSchema'
import { GoogleCalendarAuthUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateManyInputSchema'
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema'

export const GoogleCalendarAuthUpdateManyArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthUpdateManyArgs> = z.object({
  data: z.union([ GoogleCalendarAuthUpdateManyMutationInputSchema,GoogleCalendarAuthUncheckedUpdateManyInputSchema ]),
  where: GoogleCalendarAuthWhereInputSchema.optional(),
}).strict() ;

export default GoogleCalendarAuthUpdateManyArgsSchema;
