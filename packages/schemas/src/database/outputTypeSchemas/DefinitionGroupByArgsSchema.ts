import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js'
import { DefinitionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DefinitionOrderByWithAggregationInputSchema.js'
import { DefinitionScalarFieldEnumSchema } from '../inputTypeSchemas/DefinitionScalarFieldEnumSchema.js'
import { DefinitionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DefinitionScalarWhereWithAggregatesInputSchema.js'
export const DefinitionGroupByArgsSchema: z.ZodType<Prisma.DefinitionGroupByArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithAggregationInputSchema.array(),DefinitionOrderByWithAggregationInputSchema ]).optional(),
  by: DefinitionScalarFieldEnumSchema.array(),
  having: DefinitionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DefinitionGroupByArgsSchema;