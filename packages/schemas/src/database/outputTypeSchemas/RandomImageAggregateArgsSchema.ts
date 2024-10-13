import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RandomImageWhereInputSchema.js
..//inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.js
..//inputTypeSchemas/RandomImageWhereUniqueInputSchema.js
export const RandomImageAggregateArgsSchema: z.ZodType<Prisma.RandomImageAggregateArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithRelationInputSchema.array(),RandomImageOrderByWithRelationInputSchema ]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default RandomImageAggregateArgsSchema;