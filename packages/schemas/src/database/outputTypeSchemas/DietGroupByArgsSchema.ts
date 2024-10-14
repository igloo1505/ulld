import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DietWhereInputSchema } from '../inputTypeSchemas/DietWhereInputSchema'
import { DietOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DietOrderByWithAggregationInputSchema'
import { DietScalarFieldEnumSchema } from '../inputTypeSchemas/DietScalarFieldEnumSchema'
import { DietScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DietScalarWhereWithAggregatesInputSchema'

export const DietGroupByArgsSchema: z.ZodType<Prisma.DietGroupByArgs> = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([ DietOrderByWithAggregationInputSchema.array(),DietOrderByWithAggregationInputSchema ]).optional(),
  by: DietScalarFieldEnumSchema.array(),
  having: DietScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DietGroupByArgsSchema;
