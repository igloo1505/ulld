import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SnippetWhereInputSchema.js
..//inputTypeSchemas/SnippetOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/SnippetScalarFieldEnumSchema.js
..//inputTypeSchemas/SnippetScalarWhereWithAggregatesInputSchema.js
export const SnippetGroupByArgsSchema: z.ZodType<Prisma.SnippetGroupByArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithAggregationInputSchema.array(),SnippetOrderByWithAggregationInputSchema ]).optional(),
  by: SnippetScalarFieldEnumSchema.array(),
  having: SnippetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SnippetGroupByArgsSchema;