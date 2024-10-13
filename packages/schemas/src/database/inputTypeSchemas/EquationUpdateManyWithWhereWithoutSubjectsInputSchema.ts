import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationScalarWhereInputSchema } from '../EquationScalarWhereInputSchema.js';
import { EquationUpdateManyMutationInputSchema } from '../EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyWithoutSubjectsInputSchema } from '../EquationUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const EquationUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();
export default EquationUpdateManyWithWhereWithoutSubjectsInputSchema;