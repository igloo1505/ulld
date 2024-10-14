import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema'
import { RelatedValuesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RelatedValuesOrderByWithAggregationInputSchema'
import { RelatedValuesScalarFieldEnumSchema } from '../inputTypeSchemas/RelatedValuesScalarFieldEnumSchema'
import { RelatedValuesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RelatedValuesScalarWhereWithAggregatesInputSchema'

export const RelatedValuesGroupByArgsSchema: z.ZodType<Prisma.RelatedValuesGroupByArgs> = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([ RelatedValuesOrderByWithAggregationInputSchema.array(),RelatedValuesOrderByWithAggregationInputSchema ]).optional(),
  by: RelatedValuesScalarFieldEnumSchema.array(),
  having: RelatedValuesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RelatedValuesGroupByArgsSchema;
