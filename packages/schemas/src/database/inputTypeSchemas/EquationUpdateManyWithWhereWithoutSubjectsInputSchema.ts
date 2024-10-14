import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema';
import { EquationUncheckedUpdateManyWithoutSubjectsInputSchema } from './EquationUncheckedUpdateManyWithoutSubjectsInputSchema';

export const EquationUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default EquationUpdateManyWithWhereWithoutSubjectsInputSchema;
