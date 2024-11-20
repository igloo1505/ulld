import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutSubjectsInputSchema } from './EquationUpdateWithoutSubjectsInputSchema';
import { EquationUncheckedUpdateWithoutSubjectsInputSchema } from './EquationUncheckedUpdateWithoutSubjectsInputSchema';
import { EquationCreateWithoutSubjectsInputSchema } from './EquationCreateWithoutSubjectsInputSchema';
import { EquationUncheckedCreateWithoutSubjectsInputSchema } from './EquationUncheckedCreateWithoutSubjectsInputSchema';

export const EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();

export default EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema;
