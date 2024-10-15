import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema.js'
import { RelatedValuesOrderByWithRelationInputSchema } from '../inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema.js'
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema.js'
export const RelatedValuesAggregateArgsSchema: z.ZodType<Prisma.RelatedValuesAggregateArgs> = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([ RelatedValuesOrderByWithRelationInputSchema.array(),RelatedValuesOrderByWithRelationInputSchema ]).optional(),
  cursor: RelatedValuesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default RelatedValuesAggregateArgsSchema;