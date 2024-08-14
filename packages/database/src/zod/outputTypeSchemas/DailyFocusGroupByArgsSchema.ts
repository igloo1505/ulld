import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema'
import { DailyFocusOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema'
import { DailyFocusScalarFieldEnumSchema } from '../inputTypeSchemas/DailyFocusScalarFieldEnumSchema'
import { DailyFocusScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DailyFocusScalarWhereWithAggregatesInputSchema'

export const DailyFocusGroupByArgsSchema: z.ZodType<Prisma.DailyFocusGroupByArgs> = z.object({
  where: DailyFocusWhereInputSchema.optional(),
  orderBy: z.union([ DailyFocusOrderByWithAggregationInputSchema.array(),DailyFocusOrderByWithAggregationInputSchema ]).optional(),
  by: DailyFocusScalarFieldEnumSchema.array(),
  having: DailyFocusScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DailyFocusGroupByArgsSchema;
