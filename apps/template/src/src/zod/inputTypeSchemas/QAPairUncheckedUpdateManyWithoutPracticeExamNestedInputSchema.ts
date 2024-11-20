import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutPracticeExamInputSchema } from './QAPairCreateWithoutPracticeExamInputSchema';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateWithoutPracticeExamInputSchema';
import { QAPairCreateOrConnectWithoutPracticeExamInputSchema } from './QAPairCreateOrConnectWithoutPracticeExamInputSchema';
import { QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema } from './QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema } from './QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema';
import { QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema } from './QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';

export const QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema: z.ZodType<Prisma.QAPairUncheckedUpdateManyWithoutPracticeExamNestedInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => QAPairUpsertWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => QAPairUpdateWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema),z.lazy(() => QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QAPairScalarWhereInputSchema),z.lazy(() => QAPairScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QAPairUncheckedUpdateManyWithoutPracticeExamNestedInputSchema;
