import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()
export const GoogleCalendarAuthFindUniqueArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthFindUniqueArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema,
}).strict() ;
export default GoogleCalendarAuthFindUniqueArgsSchema;