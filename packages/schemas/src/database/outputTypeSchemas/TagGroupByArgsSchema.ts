import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'
import { TagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TagOrderByWithAggregationInputSchema'
import { TagScalarFieldEnumSchema } from '../inputTypeSchemas/TagScalarFieldEnumSchema'
import { TagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TagScalarWhereWithAggregatesInputSchema'

export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TagGroupByArgsSchema;
