import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema.js'
export const EquationDeleteManyArgsSchema: z.ZodType<Prisma.EquationDeleteManyArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
}).strict() ;
export default EquationDeleteManyArgsSchema;