import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema'
import { RandomImageOrderByWithRelationInputSchema } from '../inputTypeSchemas/RandomImageOrderByWithRelationInputSchema'
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema'

export const RandomImageAggregateArgsSchema: z.ZodType<Prisma.RandomImageAggregateArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithRelationInputSchema.array(),RandomImageOrderByWithRelationInputSchema ]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RandomImageAggregateArgsSchema;
