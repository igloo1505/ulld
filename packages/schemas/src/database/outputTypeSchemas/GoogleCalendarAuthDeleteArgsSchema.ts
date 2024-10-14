import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()

export const GoogleCalendarAuthDeleteArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthDeleteArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema,
}).strict() ;

export default GoogleCalendarAuthDeleteArgsSchema;
