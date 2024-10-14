import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema'
import { DefinitionOrderByWithRelationInputSchema } from '../inputTypeSchemas/DefinitionOrderByWithRelationInputSchema'
import { DefinitionWhereUniqueInputSchema } from '../inputTypeSchemas/DefinitionWhereUniqueInputSchema'

export const DefinitionAggregateArgsSchema: z.ZodType<Prisma.DefinitionAggregateArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([ DefinitionOrderByWithRelationInputSchema.array(),DefinitionOrderByWithRelationInputSchema ]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DefinitionAggregateArgsSchema;
