import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema'
import { GoogleCalendarAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema'
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()

export const GoogleCalendarAuthUpdateArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthUpdateArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: z.union([ GoogleCalendarAuthUpdateInputSchema,GoogleCalendarAuthUncheckedUpdateInputSchema ]),
  where: GoogleCalendarAuthWhereUniqueInputSchema,
}).strict() ;

export default GoogleCalendarAuthUpdateArgsSchema;
