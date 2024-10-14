import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema'
import { DefinitionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DefinitionOrderByWithAggregationInputSchema'
import { DefinitionScalarFieldEnumSchema } from '../inputTypeSchemas/DefinitionScalarFieldEnumSchema'
import { DefinitionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DefinitionScalarWhereWithAggregatesInputSchema'

export const DefinitionGroupByArgsSchema: z.ZodType<Prisma.DefinitionGroupByArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithAggregationInputSchema.array(),DefinitionOrderByWithAggregationInputSchema ]).optional(),
  by: DefinitionScalarFieldEnumSchema.array(),
  having: DefinitionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DefinitionGroupByArgsSchema;
