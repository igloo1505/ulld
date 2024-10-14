import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js'
import { GoogleCalendarAuthOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthOrderByWithAggregationInputSchema.js'
import { GoogleCalendarAuthScalarFieldEnumSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarFieldEnumSchema.js'
import { GoogleCalendarAuthScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.js'
export const GoogleCalendarAuthGroupByArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthGroupByArgs> = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleCalendarAuthOrderByWithAggregationInputSchema.array(),GoogleCalendarAuthOrderByWithAggregationInputSchema ]).optional(),
  by: GoogleCalendarAuthScalarFieldEnumSchema.array(),
  having: GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default GoogleCalendarAuthGroupByArgsSchema;