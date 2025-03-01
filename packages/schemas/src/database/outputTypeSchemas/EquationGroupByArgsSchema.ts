import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema.js'
import { EquationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EquationOrderByWithAggregationInputSchema.js'
import { EquationScalarFieldEnumSchema } from '../inputTypeSchemas/EquationScalarFieldEnumSchema.js'
import { EquationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EquationScalarWhereWithAggregatesInputSchema.js'
export const EquationGroupByArgsSchema: z.ZodType<Prisma.EquationGroupByArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([ EquationOrderByWithAggregationInputSchema.array(),EquationOrderByWithAggregationInputSchema ]).optional(),
  by: EquationScalarFieldEnumSchema.array(),
  having: EquationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default EquationGroupByArgsSchema;