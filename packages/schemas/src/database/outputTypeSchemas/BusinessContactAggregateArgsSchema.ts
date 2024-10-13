import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BusinessContactWhereInputSchema.js
..//inputTypeSchemas/BusinessContactOrderByWithRelationInputSchema.js
..//inputTypeSchemas/BusinessContactWhereUniqueInputSchema.js
export const BusinessContactAggregateArgsSchema: z.ZodType<Prisma.BusinessContactAggregateArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([ BusinessContactOrderByWithRelationInputSchema.array(),BusinessContactOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BusinessContactAggregateArgsSchema;