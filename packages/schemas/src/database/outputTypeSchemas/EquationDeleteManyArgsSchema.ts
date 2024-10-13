import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/EquationWhereInputSchema.js
export const EquationDeleteManyArgsSchema: z.ZodType<Prisma.EquationDeleteManyArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
}).strict() ;
export default EquationDeleteManyArgsSchema;