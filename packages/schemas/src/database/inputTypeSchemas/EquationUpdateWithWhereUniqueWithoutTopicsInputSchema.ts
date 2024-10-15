import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutTopicsInputSchema } from './EquationUpdateWithoutTopicsInputSchema.js';
import { EquationUncheckedUpdateWithoutTopicsInputSchema } from './EquationUncheckedUpdateWithoutTopicsInputSchema.js';
export const EquationUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();
export default EquationUpdateWithWhereUniqueWithoutTopicsInputSchema;