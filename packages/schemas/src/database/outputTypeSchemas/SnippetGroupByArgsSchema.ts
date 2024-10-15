import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js'
import { SnippetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SnippetOrderByWithAggregationInputSchema.js'
import { SnippetScalarFieldEnumSchema } from '../inputTypeSchemas/SnippetScalarFieldEnumSchema.js'
import { SnippetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SnippetScalarWhereWithAggregatesInputSchema.js'
export const SnippetGroupByArgsSchema: z.ZodType<Prisma.SnippetGroupByArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithAggregationInputSchema.array(),SnippetOrderByWithAggregationInputSchema ]).optional(),
  by: SnippetScalarFieldEnumSchema.array(),
  having: SnippetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SnippetGroupByArgsSchema;