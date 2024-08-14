import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutTopicsInputSchema } from './EquationUpdateWithoutTopicsInputSchema';
import { EquationUncheckedUpdateWithoutTopicsInputSchema } from './EquationUncheckedUpdateWithoutTopicsInputSchema';
import { EquationCreateWithoutTopicsInputSchema } from './EquationCreateWithoutTopicsInputSchema';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from './EquationUncheckedCreateWithoutTopicsInputSchema';

export const EquationUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EquationUpdateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => EquationCreateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default EquationUpsertWithWhereUniqueWithoutTopicsInputSchema;
