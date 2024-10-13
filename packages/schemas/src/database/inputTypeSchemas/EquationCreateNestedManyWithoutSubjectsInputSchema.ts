import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationCreateWithoutSubjectsInputSchema } from '../EquationCreateWithoutSubjectsInputSchema.js';
import { EquationUncheckedCreateWithoutSubjectsInputSchema } from '../EquationUncheckedCreateWithoutSubjectsInputSchema.js';
import { EquationCreateOrConnectWithoutSubjectsInputSchema } from '../EquationCreateOrConnectWithoutSubjectsInputSchema.js';
import { EquationWhereUniqueInputSchema } from '../EquationWhereUniqueInputSchema.js';
export const EquationCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.EquationCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutSubjectsInputSchema),z.lazy(() => EquationCreateWithoutSubjectsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default EquationCreateNestedManyWithoutSubjectsInputSchema;