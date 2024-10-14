import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithoutTopicsInputSchema } from './EquationUpdateWithoutTopicsInputSchema';
import { EquationUncheckedUpdateWithoutTopicsInputSchema } from './EquationUncheckedUpdateWithoutTopicsInputSchema';

export const EquationUpdateWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.EquationUpdateWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EquationUpdateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedUpdateWithoutTopicsInputSchema) ]),
}).strict();

export default EquationUpdateWithWhereUniqueWithoutTopicsInputSchema;
