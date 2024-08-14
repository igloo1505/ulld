import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema'
import { SnippetOrderByWithRelationInputSchema } from '../inputTypeSchemas/SnippetOrderByWithRelationInputSchema'
import { SnippetWhereUniqueInputSchema } from '../inputTypeSchemas/SnippetWhereUniqueInputSchema'

export const SnippetAggregateArgsSchema: z.ZodType<Prisma.SnippetAggregateArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([ SnippetOrderByWithRelationInputSchema.array(),SnippetOrderByWithRelationInputSchema ]).optional(),
  cursor: SnippetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SnippetAggregateArgsSchema;
