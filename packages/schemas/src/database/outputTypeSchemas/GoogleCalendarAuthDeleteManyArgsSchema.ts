import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema'

export const GoogleCalendarAuthDeleteManyArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthDeleteManyArgs> = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
}).strict() ;

export default GoogleCalendarAuthDeleteManyArgsSchema;
