import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutTopicsInputSchema } from './EquationCreateWithoutTopicsInputSchema';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from './EquationUncheckedCreateWithoutTopicsInputSchema';
import { EquationCreateOrConnectWithoutTopicsInputSchema } from './EquationCreateOrConnectWithoutTopicsInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';

export const EquationCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.EquationCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutTopicsInputSchema),z.lazy(() => EquationCreateWithoutTopicsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EquationCreateNestedManyWithoutTopicsInputSchema;
