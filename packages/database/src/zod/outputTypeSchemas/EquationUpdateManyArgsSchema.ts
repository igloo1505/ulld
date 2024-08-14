import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationUpdateManyMutationInputSchema } from '../inputTypeSchemas/EquationUpdateManyMutationInputSchema'
import { EquationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EquationUncheckedUpdateManyInputSchema'
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema'

export const EquationUpdateManyArgsSchema: z.ZodType<Prisma.EquationUpdateManyArgs> = z.object({
  data: z.union([ EquationUpdateManyMutationInputSchema,EquationUncheckedUpdateManyInputSchema ]),
  where: EquationWhereInputSchema.optional(),
}).strict() ;

export default EquationUpdateManyArgsSchema;
