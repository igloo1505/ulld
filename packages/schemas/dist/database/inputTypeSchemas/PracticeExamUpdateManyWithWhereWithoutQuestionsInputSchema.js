import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema.js';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema.js';
export const PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema = z.object({
    where: z.lazy(() => PracticeExamScalarWhereInputSchema),
    data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutQuestionsInputSchema)]),
}).strict();
export default PracticeExamUpdateManyWithWhereWithoutQuestionsInputSchema;
