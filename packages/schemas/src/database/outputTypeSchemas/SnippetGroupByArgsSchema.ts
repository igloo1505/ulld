import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema'
import { SnippetOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SnippetOrderByWithAggregationInputSchema'
import { SnippetScalarFieldEnumSchema } from '../inputTypeSchemas/SnippetScalarFieldEnumSchema'
import { SnippetScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SnippetScalarWhereWithAggregatesInputSchema'

export const SnippetGroupByArgsSchema: z.ZodType<Prisma.SnippetGroupByArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithAggregationInputSchema.array(),SnippetOrderByWithAggregationInputSchema ]).optional(),
  by: SnippetScalarFieldEnumSchema.array(),
  having: SnippetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SnippetGroupByArgsSchema;
