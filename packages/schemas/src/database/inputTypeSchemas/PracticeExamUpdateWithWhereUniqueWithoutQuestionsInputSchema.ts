import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from '../PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutQuestionsInputSchema } from '../PracticeExamUpdateWithoutQuestionsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutQuestionsInputSchema } from '../PracticeExamUncheckedUpdateWithoutQuestionsInputSchema.js';
export const PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithWhereUniqueWithoutQuestionsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutQuestionsInputSchema) ]),
}).strict();
export default PracticeExamUpdateWithWhereUniqueWithoutQuestionsInputSchema;