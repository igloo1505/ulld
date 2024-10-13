import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RandomImageWhereInputSchema.js
..//inputTypeSchemas/RandomImageOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/RandomImageScalarFieldEnumSchema.js
..//inputTypeSchemas/RandomImageScalarWhereWithAggregatesInputSchema.js
export const RandomImageGroupByArgsSchema: z.ZodType<Prisma.RandomImageGroupByArgs> = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithAggregationInputSchema.array(),RandomImageOrderByWithAggregationInputSchema ]).optional(),
  by: RandomImageScalarFieldEnumSchema.array(),
  having: RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default RandomImageGroupByArgsSchema;