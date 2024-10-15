import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutQuestionsInputSchema } from './PracticeExamUpdateWithoutQuestionsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutQuestionsInputSchema } from './PracticeExamUncheckedUpdateWithoutQuestionsInputSchema.js';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema.js';
export const PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema = z.object({
    where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
    update: z.union([z.lazy(() => PracticeExamUpdateWithoutQuestionsInputSchema), z.lazy(() => PracticeExamUncheckedUpdateWithoutQuestionsInputSchema)]),
    create: z.union([z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema), z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema)]),
}).strict();
export default PracticeExamUpsertWithWhereUniqueWithoutQuestionsInputSchema;
