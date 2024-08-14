import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BusinessContactWhereInputSchema } from '../inputTypeSchemas/BusinessContactWhereInputSchema'
import { BusinessContactOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BusinessContactOrderByWithAggregationInputSchema'
import { BusinessContactScalarFieldEnumSchema } from '../inputTypeSchemas/BusinessContactScalarFieldEnumSchema'
import { BusinessContactScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BusinessContactScalarWhereWithAggregatesInputSchema'

export const BusinessContactGroupByArgsSchema: z.ZodType<Prisma.BusinessContactGroupByArgs> = z.object({
  where: BusinessContactWhereInputSchema.optional(),
  orderBy: z.union([ BusinessContactOrderByWithAggregationInputSchema.array(),BusinessContactOrderByWithAggregationInputSchema ]).optional(),
  by: BusinessContactScalarFieldEnumSchema.array(),
  having: BusinessContactScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BusinessContactGroupByArgsSchema;
