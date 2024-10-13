import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { EquationCreateWithoutTopicsInputSchema } from '../EquationCreateWithoutTopicsInputSchema.js';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from '../EquationUncheckedCreateWithoutTopicsInputSchema.js';
import { EquationCreateOrConnectWithoutTopicsInputSchema } from '../EquationCreateOrConnectWithoutTopicsInputSchema.js';
import { EquationUpsertWithWhereUniqueWithoutTopicsInputSchema } from '../EquationUpsertWithWhereUniqueWithoutTopicsInputSchema.js';
import { EquationWhereUniqueInputSchema } from '../EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithWhereUniqueWithoutTopicsInputSchema } from '../EquationUpdateWithWhereUniqueWithoutTopicsInputSchema.js';
import { EquationUpdateManyWithWhereWithoutTopicsInputSchema } from '../EquationUpdateManyWithWhereWithoutTopicsInputSchema.js';
import { EquationScalarWhereInputSchema } from '../EquationScalarWhereInputSchema.js';
export const EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateManyWithoutTopicsNestedInput> = z.object({
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
export default EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema;