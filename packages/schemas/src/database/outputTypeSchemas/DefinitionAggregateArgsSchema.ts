import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionWhereInputSchema.js
..//inputTypeSchemas/DefinitionOrderByWithRelationInputSchema.js
..//inputTypeSchemas/DefinitionWhereUniqueInputSchema.js
export const DefinitionAggregateArgsSchema: z.ZodType<Prisma.DefinitionAggregateArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithRelationInputSchema.array(),DefinitionOrderByWithRelationInputSchema ]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DefinitionAggregateArgsSchema;