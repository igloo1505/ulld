import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema.js'
import { RandomImageOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RandomImageOrderByWithAggregationInputSchema.js'
import { RandomImageScalarFieldEnumSchema } from '../inputTypeSchemas/RandomImageScalarFieldEnumSchema.js'
import { RandomImageScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RandomImageScalarWhereWithAggregatesInputSchema.js'
export const RandomImageGroupByArgsSchema: z.ZodType<Prisma.RandomImageGroupByArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithAggregationInputSchema.array(),RandomImageOrderByWithAggregationInputSchema ]).optional(),
  by: RandomImageScalarFieldEnumSchema.array(),
  having: RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default RandomImageGroupByArgsSchema;