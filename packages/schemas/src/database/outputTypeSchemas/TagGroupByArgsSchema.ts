import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema.js'
import { TagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TagOrderByWithAggregationInputSchema.js'
import { TagScalarFieldEnumSchema } from '../inputTypeSchemas/TagScalarFieldEnumSchema.js'
import { TagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TagScalarWhereWithAggregatesInputSchema.js'
export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default TagGroupByArgsSchema;