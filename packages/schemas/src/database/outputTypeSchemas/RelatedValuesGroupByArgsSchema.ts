import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RelatedValuesWhereInputSchema.js
..//inputTypeSchemas/RelatedValuesOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/RelatedValuesScalarFieldEnumSchema.js
..//inputTypeSchemas/RelatedValuesScalarWhereWithAggregatesInputSchema.js
export const RelatedValuesGroupByArgsSchema: z.ZodType<Prisma.RelatedValuesGroupByArgs> = z.object({
  where: RelatedValuesWhereInputSchema.optional(),
  orderBy: z.union([ RelatedValuesOrderByWithAggregationInputSchema.array(),RelatedValuesOrderByWithAggregationInputSchema ]).optional(),
  by: RelatedValuesScalarFieldEnumSchema.array(),
  having: RelatedValuesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default RelatedValuesGroupByArgsSchema;