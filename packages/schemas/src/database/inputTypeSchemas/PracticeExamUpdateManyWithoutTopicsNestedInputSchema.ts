import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutTopicsInputSchema } from './PracticeExamCreateWithoutTopicsInputSchema';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateWithoutTopicsInputSchema';
import { PracticeExamCreateOrConnectWithoutTopicsInputSchema } from './PracticeExamCreateOrConnectWithoutTopicsInputSchema';
import { PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema } from './PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema } from './PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema } from './PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';

export const PracticeExamUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PracticeExamScalarWhereInputSchema),z.lazy(() => PracticeExamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PracticeExamUpdateManyWithoutTopicsNestedInputSchema;
