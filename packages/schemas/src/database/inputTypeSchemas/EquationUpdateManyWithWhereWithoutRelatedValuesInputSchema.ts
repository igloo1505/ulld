import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema.js';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema.js';
export const EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema) ]),
}).strict();
export default EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema;