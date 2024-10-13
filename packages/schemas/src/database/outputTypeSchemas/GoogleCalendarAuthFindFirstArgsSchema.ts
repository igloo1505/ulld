import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js
..//inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.js
..//inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js
..//inputTypeSchemas/GoogleCalendarAuthScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const GoogleCalendarAuthSelectSchema: z.ZodType<Prisma.GoogleCalendarAuthSelect> = z.object({
  id: z.boolean().optional(),
  auth: z.boolean().optional(),
}).strict()
export const GoogleCalendarAuthFindFirstArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthFindFirstArgs> = z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleCalendarAuthOrderByWithRelationInputSchema.array(),GoogleCalendarAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GoogleCalendarAuthScalarFieldEnumSchema,GoogleCalendarAuthScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default GoogleCalendarAuthFindFirstArgsSchema;