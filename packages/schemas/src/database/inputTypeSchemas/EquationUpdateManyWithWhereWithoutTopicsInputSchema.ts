import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationScalarWhereInputSchema } from '../EquationScalarWhereInputSchema.js';
import { EquationUpdateManyMutationInputSchema } from '../EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyWithoutTopicsInputSchema } from '../EquationUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const EquationUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default EquationUpdateManyWithWhereWithoutTopicsInputSchema;