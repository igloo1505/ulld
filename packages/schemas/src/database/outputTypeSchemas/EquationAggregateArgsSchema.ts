import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/EquationWhereInputSchema.js
..//inputTypeSchemas/EquationOrderByWithRelationInputSchema.js
..//inputTypeSchemas/EquationWhereUniqueInputSchema.js
export const EquationAggregateArgsSchema: z.ZodType<Prisma.EquationAggregateArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
  orderBy: z.union([ EquationOrderByWithRelationInputSchema.array(),EquationOrderByWithRelationInputSchema ]).optional(),
  cursor: EquationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default EquationAggregateArgsSchema;