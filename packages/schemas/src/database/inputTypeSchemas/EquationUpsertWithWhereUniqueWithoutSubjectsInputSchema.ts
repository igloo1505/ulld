import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutSubjectsInputSchema } from './EquationUpdateWithoutSubjectsInputSchema.js';
import { EquationUncheckedUpdateWithoutSubjectsInputSchema } from './EquationUncheckedUpdateWithoutSubjectsInputSchema.js';
import { EquationCreateWithoutSubjectsInputSchema } from './EquationCreateWithoutSubjectsInputSchema.js';
import { EquationUncheckedCreateWithoutSubjectsInputSchema } from './EquationUncheckedCreateWithoutSubjectsInputSchema.js';
export const EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutSubjectsInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema) ]),
}).strict();
export default EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema;