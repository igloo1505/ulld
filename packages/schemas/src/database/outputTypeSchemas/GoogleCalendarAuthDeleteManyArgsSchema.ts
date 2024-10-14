import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js'
export const GoogleCalendarAuthDeleteManyArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthDeleteManyArgs> = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
}).strict() ;
export default GoogleCalendarAuthDeleteManyArgsSchema;