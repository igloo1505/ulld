import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from '../PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamCreateWithoutQuestionsInputSchema } from '../PracticeExamCreateWithoutQuestionsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from '../PracticeExamUncheckedCreateWithoutQuestionsInputSchema.js';
export const PracticeExamCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamCreateOrConnectWithoutQuestionsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();
export default PracticeExamCreateOrConnectWithoutQuestionsInputSchema;