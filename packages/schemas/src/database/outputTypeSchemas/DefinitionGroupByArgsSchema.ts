import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionWhereInputSchema.js
..//inputTypeSchemas/DefinitionOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/DefinitionScalarFieldEnumSchema.js
..//inputTypeSchemas/DefinitionScalarWhereWithAggregatesInputSchema.js
export const DefinitionGroupByArgsSchema: z.ZodType<Prisma.DefinitionGroupByArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithAggregationInputSchema.array(),DefinitionOrderByWithAggregationInputSchema ]).optional(),
  by: DefinitionScalarFieldEnumSchema.array(),
  having: DefinitionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DefinitionGroupByArgsSchema;