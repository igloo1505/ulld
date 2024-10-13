import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/FeatureRequestWhereInputSchema.js
..//inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema.js
..//inputTypeSchemas/FeatureRequestWhereUniqueInputSchema.js
export const FeatureRequestAggregateArgsSchema: z.ZodType<Prisma.FeatureRequestAggregateArgs> = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([ FeatureRequestOrderByWithRelationInputSchema.array(),FeatureRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default FeatureRequestAggregateArgsSchema;