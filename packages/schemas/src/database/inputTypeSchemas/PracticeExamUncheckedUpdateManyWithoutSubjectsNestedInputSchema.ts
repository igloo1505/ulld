import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamCreateWithoutSubjectsInputSchema } from './PracticeExamCreateWithoutSubjectsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateWithoutSubjectsInputSchema.js';
import { PracticeExamCreateOrConnectWithoutSubjectsInputSchema } from './PracticeExamCreateOrConnectWithoutSubjectsInputSchema.js';
import { PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema } from './PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema.js';
export const PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema: z.ZodType<Prisma.PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PracticeExamScalarWhereInputSchema),z.lazy(() => PracticeExamScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema;