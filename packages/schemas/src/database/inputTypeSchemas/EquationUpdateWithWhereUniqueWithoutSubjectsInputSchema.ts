import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from '../EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutSubjectsInputSchema } from '../EquationUpdateWithoutSubjectsInputSchema.js';
import { EquationUncheckedUpdateWithoutSubjectsInputSchema } from '../EquationUncheckedUpdateWithoutSubjectsInputSchema.js';
export const EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutSubjectsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutSubjectsInputSchema) ]),
}).strict();
export default EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema;