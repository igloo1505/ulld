import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListWhereInputSchema.js
..//inputTypeSchemas/ReadingListOrderByWithRelationInputSchema.js
..//inputTypeSchemas/ReadingListWhereUniqueInputSchema.js
export const ReadingListAggregateArgsSchema: z.ZodType<Prisma.ReadingListAggregateArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
  orderBy: z.union([ ReadingListOrderByWithRelationInputSchema.array(),ReadingListOrderByWithRelationInputSchema ]).optional(),
  cursor: ReadingListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default ReadingListAggregateArgsSchema;