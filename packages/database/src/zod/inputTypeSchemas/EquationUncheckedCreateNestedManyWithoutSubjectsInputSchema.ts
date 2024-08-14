import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutSubjectsInputSchema } from './EquationCreateWithoutSubjectsInputSchema';
import { EquationUncheckedCreateWithoutSubjectsInputSchema } from './EquationUncheckedCreateWithoutSubjectsInputSchema';
import { EquationCreateOrConnectWithoutSubjectsInputSchema } from './EquationCreateOrConnectWithoutSubjectsInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';

export const EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationUncheckedCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutSubjectsInputSchema),z.lazy(() => EquationCreateWithoutSubjectsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema;
