import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema';
import { SubjectCreateOrConnectWithoutPracticeExamInputSchema } from './SubjectCreateOrConnectWithoutPracticeExamInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema } from './SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema } from './SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema';
import { SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema } from './SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUpdateManyWithoutPracticeExamNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutPracticeExamNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUpdateManyWithoutPracticeExamNestedInputSchema;
