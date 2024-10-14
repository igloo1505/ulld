import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js'
import { DefinitionOrderByWithRelationInputSchema } from '../inputTypeSchemas/DefinitionOrderByWithRelationInputSchema.js'
import { DefinitionWhereUniqueInputSchema } from '../inputTypeSchemas/DefinitionWhereUniqueInputSchema.js'
export const DefinitionAggregateArgsSchema: z.ZodType<Prisma.DefinitionAggregateArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithRelationInputSchema.array(),DefinitionOrderByWithRelationInputSchema ]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default DefinitionAggregateArgsSchema;