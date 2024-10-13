import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TopicWhereInputSchema.js
..//inputTypeSchemas/TopicOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/TopicScalarFieldEnumSchema.js
..//inputTypeSchemas/TopicScalarWhereWithAggregatesInputSchema.js
export const TopicGroupByArgsSchema: z.ZodType<Prisma.TopicGroupByArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([ TopicOrderByWithAggregationInputSchema.array(),TopicOrderByWithAggregationInputSchema ]).optional(),
  by: TopicScalarFieldEnumSchema.array(),
  having: TopicScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default TopicGroupByArgsSchema;