import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema'
import { GoogleCalendarAuthCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthCreateInputSchema'
import { GoogleCalendarAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedCreateInputSchema'
import { GoogleCalendarAuthUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUpdateInputSchema'
import { GoogleCalendarAuthUncheckedUpdateInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()

export const GoogleCalendarAuthUpsertArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthUpsertArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereUniqueInputSchema,
  create: z.union([ GoogleCalendarAuthCreateInputSchema,GoogleCalendarAuthUncheckedCreateInputSchema ]),
  update: z.union([ GoogleCalendarAuthUpdateInputSchema,GoogleCalendarAuthUncheckedUpdateInputSchema ]),
}).strict() ;

export default GoogleCalendarAuthUpsertArgsSchema;
