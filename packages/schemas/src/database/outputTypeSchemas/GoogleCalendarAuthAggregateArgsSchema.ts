import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { GoogleCalendarAuthWhereInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereInputSchema.js'
import { GoogleCalendarAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthOrderByWithRelationInputSchema.js'
import { GoogleCalendarAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleCalendarAuthWhereUniqueInputSchema.js'
export const GoogleCalendarAuthAggregateArgsSchema: z.ZodType<Prisma.GoogleCalendarAuthAggregateArgs> = z.object({
  where: GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleCalendarAuthOrderByWithRelationInputSchema.array(),GoogleCalendarAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default GoogleCalendarAuthAggregateArgsSchema;