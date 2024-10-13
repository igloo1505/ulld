import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BusinessContactWhereInputSchema.js
..//inputTypeSchemas/BusinessContactOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/BusinessContactScalarFieldEnumSchema.js
..//inputTypeSchemas/BusinessContactScalarWhereWithAggregatesInputSchema.js
export const BusinessContactGroupByArgsSchema: z.ZodType<Prisma.BusinessContactGroupByArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([ BusinessContactOrderByWithAggregationInputSchema.array(),BusinessContactOrderByWithAggregationInputSchema ]).optional(),
  by: BusinessContactScalarFieldEnumSchema.array(),
  having: BusinessContactScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BusinessContactGroupByArgsSchema;