import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/EquationUpdateManyMutationInputSchema.js
..//inputTypeSchemas/EquationUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/EquationWhereInputSchema.js
export const EquationUpdateManyArgsSchema: z.ZodType<Prisma.EquationUpdateManyArgs> = z.object({
  data: z.union([ EquationUpdateManyMutationInputSchema,EquationUncheckedUpdateManyInputSchema ]),
  where: EquationWhereInputSchema.optional(),
}).strict() ;
export default EquationUpdateManyArgsSchema;