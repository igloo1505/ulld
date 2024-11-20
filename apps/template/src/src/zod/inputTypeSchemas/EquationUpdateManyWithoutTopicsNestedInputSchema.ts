import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutTopicsInputSchema } from './EquationCreateWithoutTopicsInputSchema';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from './EquationUncheckedCreateWithoutTopicsInputSchema';
import { EquationCreateOrConnectWithoutTopicsInputSchema } from './EquationCreateOrConnectWithoutTopicsInputSchema';
import { EquationUpsertWithWhereUniqueWithoutTopicsInputSchema } from './EquationUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithWhereUniqueWithoutTopicsInputSchema } from './EquationUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { EquationUpdateManyWithWhereWithoutTopicsInputSchema } from './EquationUpdateManyWithWhereWithoutTopicsInputSchema';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';

export const EquationUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.EquationUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutTopicsInputSchema),z.lazy(() => EquationCreateWithoutTopicsInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => EquationCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EquationUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => EquationUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EquationUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => EquationUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EquationUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => EquationUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EquationUpdateManyWithoutTopicsNestedInputSchema;
