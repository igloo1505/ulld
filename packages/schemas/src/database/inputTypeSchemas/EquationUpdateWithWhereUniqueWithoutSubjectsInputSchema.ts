import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutSubjectsInputSchema } from './EquationUpdateWithoutSubjectsInputSchema';
import { EquationUncheckedUpdateWithoutSubjectsInputSchema } from './EquationUncheckedUpdateWithoutSubjectsInputSchema';

export const EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();

export default EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema;
