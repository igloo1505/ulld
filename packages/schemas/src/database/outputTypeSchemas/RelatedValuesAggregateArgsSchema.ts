import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema'
import { RelatedValuesOrderByWithRelationInputSchema } from '../inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema'
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema'

export const RelatedValuesAggregateArgsSchema: z.ZodType<Prisma.RelatedValuesAggregateArgs> = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([ RelatedValuesOrderByWithRelationInputSchema.array(),RelatedValuesOrderByWithRelationInputSchema ]).optional(),
  cursor: RelatedValuesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RelatedValuesAggregateArgsSchema;
