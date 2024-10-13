import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TagWhereInputSchema.js
..//inputTypeSchemas/TagOrderByWithRelationInputSchema.js
..//inputTypeSchemas/TagWhereUniqueInputSchema.js
export const TagAggregateArgsSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default TagAggregateArgsSchema;