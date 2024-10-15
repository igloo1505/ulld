import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema.js';
import { PracticeExamCreateOrConnectWithoutQuestionsInputSchema } from './PracticeExamCreateOrConnectWithoutQuestionsInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
export const PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamUncheckedCreateNestedManyWithoutQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutQuestionsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutQuestionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default PracticeExamUncheckedCreateNestedManyWithoutQuestionsInputSchema;