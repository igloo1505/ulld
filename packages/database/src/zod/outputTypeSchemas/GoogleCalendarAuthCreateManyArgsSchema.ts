import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthCreateManyInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateManyInputSchema'

export const GoogleCalendarAuthCreateManyArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthCreateManyArgs> = z.object({
  data: z.union([ GoogleCalendarAuthCreateManyInputSchema,GoogleCalendarAuthCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default GoogleCalendarAuthCreateManyArgsSchema;
