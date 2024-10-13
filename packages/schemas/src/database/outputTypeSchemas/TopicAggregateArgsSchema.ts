import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TopicWhereInputSchema.js
..//inputTypeSchemas/TopicOrderByWithRelationInputSchema.js
..//inputTypeSchemas/TopicWhereUniqueInputSchema.js
export const TopicAggregateArgsSchema: z.ZodType<Prisma.TopicAggregateArgs> = z.object({
  where: TopicWhereInputSchema.optional(),
  orderBy: z.union([ TopicOrderByWithRelationInputSchema.array(),TopicOrderByWithRelationInputSchema ]).optional(),
  cursor: TopicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default TopicAggregateArgsSchema;