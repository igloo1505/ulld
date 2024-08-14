import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema'
import { FeatureRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FeatureRequestOrderByWithAggregationInputSchema'
import { FeatureRequestScalarFieldEnumSchema } from '../inputTypeSchemas/FeatureRequestScalarFieldEnumSchema'
import { FeatureRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FeatureRequestScalarWhereWithAggregatesInputSchema'

export const FeatureRequestGroupByArgsSchema: z.ZodType<Prisma.FeatureRequestGroupByArgs> = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([ FeatureRequestOrderByWithAggregationInputSchema.array(),FeatureRequestOrderByWithAggregationInputSchema ]).optional(),
  by: FeatureRequestScalarFieldEnumSchema.array(),
  having: FeatureRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FeatureRequestGroupByArgsSchema;
