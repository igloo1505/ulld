import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema'
import { TimePeriodOrderByWithRelationInputSchema } from '../inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema'
import { TimePeriodWhereUniqueInputSchema } from '../inputTypeSchemas/TimePeriodWhereUniqueInputSchema'

export const TimePeriodAggregateArgsSchema: z.ZodType<Prisma.TimePeriodAggregateArgs> = z.object({
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([ TimePeriodOrderByWithRelationInputSchema.array(),TimePeriodOrderByWithRelationInputSchema ]).optional(),
  cursor: TimePeriodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TimePeriodAggregateArgsSchema;
