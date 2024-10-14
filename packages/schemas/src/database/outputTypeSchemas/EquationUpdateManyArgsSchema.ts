import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { EquationUpdateManyMutationInputSchema } from '../inputTypeSchemas/EquationUpdateManyMutationInputSchema.js'
import { EquationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EquationUncheckedUpdateManyInputSchema.js'
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema.js'
export const EquationUpdateManyArgsSchema: z.ZodType<Prisma.EquationUpdateManyArgs> = z.object({
  data: z.union([ EquationUpdateManyMutationInputSchema,EquationUncheckedUpdateManyInputSchema ]),
  where: EquationWhereInputSchema.optional(),
}).strict() ;
export default EquationUpdateManyArgsSchema;