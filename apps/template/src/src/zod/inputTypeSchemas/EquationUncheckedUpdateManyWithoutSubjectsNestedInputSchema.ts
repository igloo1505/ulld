import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutSubjectsInputSchema } from './EquationCreateWithoutSubjectsInputSchema';
import { EquationUncheckedCreateWithoutSubjectsInputSchema } from './EquationUncheckedCreateWithoutSubjectsInputSchema';
import { EquationCreateOrConnectWithoutSubjectsInputSchema } from './EquationCreateOrConnectWithoutSubjectsInputSchema';
import { EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema';
import { EquationUpdateManyWithWhereWithoutSubjectsInputSchema } from './EquationUpdateManyWithWhereWithoutSubjectsInputSchema';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';

export const EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutSubjectsInputSchema),z.lazy(() => EquationCreateWithoutSubjectsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => EquationUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => EquationUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EquationUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => EquationUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
