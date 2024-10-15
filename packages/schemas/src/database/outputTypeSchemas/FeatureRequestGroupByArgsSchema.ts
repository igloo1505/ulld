import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema.js'
import { FeatureRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FeatureRequestOrderByWithAggregationInputSchema.js'
import { FeatureRequestScalarFieldEnumSchema } from '../inputTypeSchemas/FeatureRequestScalarFieldEnumSchema.js'
import { FeatureRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FeatureRequestScalarWhereWithAggregatesInputSchema.js'
export const FeatureRequestGroupByArgsSchema: z.ZodType<Prisma.FeatureRequestGroupByArgs> = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([ FeatureRequestOrderByWithAggregationInputSchema.array(),FeatureRequestOrderByWithAggregationInputSchema ]).optional(),
  by: FeatureRequestScalarFieldEnumSchema.array(),
  having: FeatureRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default FeatureRequestGroupByArgsSchema;