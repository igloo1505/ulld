import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TimePeriodWhereInputSchema.js
..//inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema.js
..//inputTypeSchemas/TimePeriodWhereUniqueInputSchema.js
export const TimePeriodAggregateArgsSchema: z.ZodType<Prisma.TimePeriodAggregateArgs> = z.object({
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([ TimePeriodOrderByWithRelationInputSchema.array(),TimePeriodOrderByWithRelationInputSchema ]).optional(),
  cursor: TimePeriodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default TimePeriodAggregateArgsSchema;