import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema';
import { EquationUncheckedUpdateManyWithoutTopicsInputSchema } from './EquationUncheckedUpdateManyWithoutTopicsInputSchema';

export const EquationUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default EquationUpdateManyWithWhereWithoutTopicsInputSchema;
