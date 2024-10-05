import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema'
import { EquationOrderByWithRelationInputSchema } from '../inputTypeSchemas/EquationOrderByWithRelationInputSchema'
import { EquationWhereUniqueInputSchema } from '../inputTypeSchemas/EquationWhereUniqueInputSchema'

export const EquationAggregateArgsSchema: z.ZodType<Prisma.EquationAggregateArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([ EquationOrderByWithRelationInputSchema.array(),EquationOrderByWithRelationInputSchema ]).optional(),
  cursor: EquationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EquationAggregateArgsSchema;
