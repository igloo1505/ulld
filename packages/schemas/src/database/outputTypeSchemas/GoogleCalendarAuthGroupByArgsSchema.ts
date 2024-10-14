import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema'
import { GoogleCalendarAuthOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthOrderByWithAggregationInputSchema'
import { GoogleCalendarAuthScalarFieldEnumSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarFieldEnumSchema'
import { GoogleCalendarAuthScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthScalarWhereWithAggregatesInputSchema'

export const GoogleCalendarAuthGroupByArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthGroupByArgs> = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleCalendarAuthOrderByWithAggregationInputSchema.array(),GoogleCalendarAuthOrderByWithAggregationInputSchema ]).optional(),
  by: GoogleCalendarAuthScalarFieldEnumSchema.array(),
  having: GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GoogleCalendarAuthGroupByArgsSchema;
