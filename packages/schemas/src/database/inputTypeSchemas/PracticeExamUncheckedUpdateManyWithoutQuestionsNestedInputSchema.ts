import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema';
import { PracticeExamCreateOrConnectWithoutQuestionsInputSchema } from './PracticeExamCreateOrConnectWithoutQuestionsInputSchema';
import { PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema } from './PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema } from './PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema';
import { PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema } from './PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';

export const PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutQuestionsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutQuestionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PracticeExamScalarWhereInputSchema),z.lazy(() => PracticeExamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema;
