import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema';
import { EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema';

export const EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUpdateManyWithWhereWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateManyMutationInputSchema),z.lazy(() => EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema) ]),
}).strict();

export default EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema;
