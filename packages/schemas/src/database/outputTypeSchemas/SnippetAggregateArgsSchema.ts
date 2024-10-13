import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SnippetWhereInputSchema.js
..//inputTypeSchemas/SnippetOrderByWithRelationInputSchema.js
..//inputTypeSchemas/SnippetWhereUniqueInputSchema.js
export const SnippetAggregateArgsSchema: z.ZodType<Prisma.SnippetAggregateArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithRelationInputSchema.array(),SnippetOrderByWithRelationInputSchema ]).optional(),
  cursor: SnippetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SnippetAggregateArgsSchema;