import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema.js'
import { BusinessContactOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BusinessContactOrderByWithAggregationInputSchema.js'
import { BusinessContactScalarFieldEnumSchema } from '../inputTypeSchemas/BusinessContactScalarFieldEnumSchema.js'
import { BusinessContactScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BusinessContactScalarWhereWithAggregatesInputSchema.js'
export const BusinessContactGroupByArgsSchema: z.ZodType<Prisma.BusinessContactGroupByArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([ BusinessContactOrderByWithAggregationInputSchema.array(),BusinessContactOrderByWithAggregationInputSchema ]).optional(),
  by: BusinessContactScalarFieldEnumSchema.array(),
  having: BusinessContactScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BusinessContactGroupByArgsSchema;