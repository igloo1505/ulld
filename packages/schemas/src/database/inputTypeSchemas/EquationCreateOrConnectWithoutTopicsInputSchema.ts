import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationCreateWithoutTopicsInputSchema } from './EquationCreateWithoutTopicsInputSchema';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from './EquationUncheckedCreateWithoutTopicsInputSchema';

export const EquationCreateOrConnectWithoutTopicsInputSchema: z.ZodType<Prisma.EquationCreateOrConnectWithoutTopicsInput> = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EquationCreateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();

export default EquationCreateOrConnectWithoutTopicsInputSchema;
