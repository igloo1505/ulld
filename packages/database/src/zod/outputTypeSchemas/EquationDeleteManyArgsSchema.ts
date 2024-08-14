import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema'

export const EquationDeleteManyArgsSchema: z.ZodType<Prisma.EquationDeleteManyArgs> = z.object({
  where: EquationWhereInputSchema.optional(),
}).strict() ;

export default EquationDeleteManyArgsSchema;
