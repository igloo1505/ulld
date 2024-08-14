import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FeatureRequestWhereInputSchema } from '../inputTypeSchemas/FeatureRequestWhereInputSchema'
import { FeatureRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema'
import { FeatureRequestWhereUniqueInputSchema } from '../inputTypeSchemas/FeatureRequestWhereUniqueInputSchema'

export const FeatureRequestAggregateArgsSchema: z.ZodType<Prisma.FeatureRequestAggregateArgs> = z.object({
  where: FeatureRequestWhereInputSchema.optional(),
  orderBy: z.union([ FeatureRequestOrderByWithRelationInputSchema.array(),FeatureRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: FeatureRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FeatureRequestAggregateArgsSchema;
