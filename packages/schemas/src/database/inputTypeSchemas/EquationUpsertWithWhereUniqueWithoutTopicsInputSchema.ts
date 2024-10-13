import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from '../EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutTopicsInputSchema } from '../EquationUpdateWithoutTopicsInputSchema.js';
import { EquationUncheckedUpdateWithoutTopicsInputSchema } from '../EquationUncheckedUpdateWithoutTopicsInputSchema.js';
import { EquationCreateWithoutTopicsInputSchema } from '../EquationCreateWithoutTopicsInputSchema.js';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from '../EquationUncheckedCreateWithoutTopicsInputSchema.js';
export const EquationUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default EquationUpsertWithWhereUniqueWithoutTopicsInputSchema;