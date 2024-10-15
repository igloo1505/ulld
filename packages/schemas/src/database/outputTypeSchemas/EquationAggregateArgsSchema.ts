import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema.js'
import { EquationOrderByWithRelationInputSchema } from '../inputTypeSchemas/EquationOrderByWithRelationInputSchema.js'
import { EquationWhereUniqueInputSchema } from '../inputTypeSchemas/EquationWhereUniqueInputSchema.js'
export const EquationAggregateArgsSchema: z.ZodType<Prisma.EquationAggregateArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([ EquationOrderByWithRelationInputSchema.array(),EquationOrderByWithRelationInputSchema ]).optional(),
  cursor: EquationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default EquationAggregateArgsSchema;