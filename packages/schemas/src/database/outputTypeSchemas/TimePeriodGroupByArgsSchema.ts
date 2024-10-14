import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema'
import { TimePeriodOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TimePeriodOrderByWithAggregationInputSchema'
import { TimePeriodScalarFieldEnumSchema } from '../inputTypeSchemas/TimePeriodScalarFieldEnumSchema'
import { TimePeriodScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TimePeriodScalarWhereWithAggregatesInputSchema'

export const TimePeriodGroupByArgsSchema: z.ZodType<Prisma.TimePeriodGroupByArgs> = z.object({
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([ TimePeriodOrderByWithAggregationInputSchema.array(),TimePeriodOrderByWithAggregationInputSchema ]).optional(),
  by: TimePeriodScalarFieldEnumSchema.array(),
  having: TimePeriodScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TimePeriodGroupByArgsSchema;
