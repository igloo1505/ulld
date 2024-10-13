import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListWhereInputSchema.js
..//inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/ReadingListScalarFieldEnumSchema.js
..//inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema.js
export const ReadingListGroupByArgsSchema: z.ZodType<Prisma.ReadingListGroupByArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ ReadingListOrderByWithAggregationInputSchema.array(),ReadingListOrderByWithAggregationInputSchema ]).optional(),
  by: ReadingListScalarFieldEnumSchema.array(),
  having: ReadingListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ReadingListGroupByArgsSchema;