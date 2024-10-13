import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TagWhereInputSchema.js
..//inputTypeSchemas/TagOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/TagScalarFieldEnumSchema.js
..//inputTypeSchemas/TagScalarWhereWithAggregatesInputSchema.js
export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default TagGroupByArgsSchema;