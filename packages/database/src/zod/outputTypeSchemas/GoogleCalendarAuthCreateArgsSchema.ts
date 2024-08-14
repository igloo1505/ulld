import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateInputSchema'
import { GoogleCalendarAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()

export const GoogleCalendarAuthCreateArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthCreateArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  data: z.union([ GoogleCalendarAuthCreateInputSchema,GoogleCalendarAuthUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default GoogleCalendarAuthCreateArgsSchema;
