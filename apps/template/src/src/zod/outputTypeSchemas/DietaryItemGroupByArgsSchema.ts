import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietaryItemWhereInputSchema } from '../inputTypeSchemas/DietaryItemWhereInputSchema'
import { DietaryItemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DietaryItemOrderByWithAggregationInputSchema'
import { DietaryItemScalarFieldEnumSchema } from '../inputTypeSchemas/DietaryItemScalarFieldEnumSchema'
import { DietaryItemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DietaryItemScalarWhereWithAggregatesInputSchema'

export const DietaryItemGroupByArgsSchema: z.ZodType<Prisma.DietaryItemGroupByArgs> = z.object({
  where: DietaryItemWhereInputSchema.optional(),
  orderBy: z.union([ DietaryItemOrderByWithAggregationInputSchema.array(),DietaryItemOrderByWithAggregationInputSchema ]).optional(),
  by: DietaryItemScalarFieldEnumSchema.array(),
  having: DietaryItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DietaryItemGroupByArgsSchema;
