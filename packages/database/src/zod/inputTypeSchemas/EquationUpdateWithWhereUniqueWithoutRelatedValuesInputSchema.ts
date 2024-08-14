import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutRelatedValuesInputSchema } from './EquationUpdateWithoutRelatedValuesInputSchema';
import { EquationUncheckedUpdateWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateWithoutRelatedValuesInputSchema';

export const EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutRelatedValuesInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutRelatedValuesInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutRelatedValuesInputSchema) ]),
}).strict();

export default EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema;
