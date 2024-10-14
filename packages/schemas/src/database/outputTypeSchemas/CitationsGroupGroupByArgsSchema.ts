import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CitationsGroupWhereInputSchema } from '../inputTypeSchemas/CitationsGroupWhereInputSchema'
import { CitationsGroupOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CitationsGroupOrderByWithAggregationInputSchema'
import { CitationsGroupScalarFieldEnumSchema } from '../inputTypeSchemas/CitationsGroupScalarFieldEnumSchema'
import { CitationsGroupScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CitationsGroupScalarWhereWithAggregatesInputSchema'

export const CitationsGroupGroupByArgsSchema: z.ZodType<Prisma.CitationsGroupGroupByArgs> = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([ CitationsGroupOrderByWithAggregationInputSchema.array(),CitationsGroupOrderByWithAggregationInputSchema ]).optional(),
  by: CitationsGroupScalarFieldEnumSchema.array(),
  having: CitationsGroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CitationsGroupGroupByArgsSchema;
