import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema'
import { RandomImageOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RandomImageOrderByWithAggregationInputSchema'
import { RandomImageScalarFieldEnumSchema } from '../inputTypeSchemas/RandomImageScalarFieldEnumSchema'
import { RandomImageScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RandomImageScalarWhereWithAggregatesInputSchema'

export const RandomImageGroupByArgsSchema: z.ZodType<Prisma.RandomImageGroupByArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithAggregationInputSchema.array(),RandomImageOrderByWithAggregationInputSchema ]).optional(),
  by: RandomImageScalarFieldEnumSchema.array(),
  having: RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RandomImageGroupByArgsSchema;
