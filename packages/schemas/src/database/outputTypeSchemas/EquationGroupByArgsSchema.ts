import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema'
import { EquationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EquationOrderByWithAggregationInputSchema'
import { EquationScalarFieldEnumSchema } from '../inputTypeSchemas/EquationScalarFieldEnumSchema'
import { EquationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EquationScalarWhereWithAggregatesInputSchema'

export const EquationGroupByArgsSchema: z.ZodType<Prisma.EquationGroupByArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([ EquationOrderByWithAggregationInputSchema.array(),EquationOrderByWithAggregationInputSchema ]).optional(),
  by: EquationScalarFieldEnumSchema.array(),
  having: EquationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EquationGroupByArgsSchema;
