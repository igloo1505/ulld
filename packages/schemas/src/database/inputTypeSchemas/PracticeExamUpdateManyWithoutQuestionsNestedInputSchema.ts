import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema.js';
import { PracticeExamCreateOrConnectWithoutQuestionsInputSchema } from './PracticeExamCreateOrConnectWithoutQuestionsInputSchema.js';
import { PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema } from './PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema } from './PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema.js';
import { PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema } from './PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema.js';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema.js';
export const PracticeExamUpdateManyWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithoutQuestionsNestedInput> = z.object({
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
export default PracticeExamUpdateManyWithoutQuestionsNestedInputSchema;