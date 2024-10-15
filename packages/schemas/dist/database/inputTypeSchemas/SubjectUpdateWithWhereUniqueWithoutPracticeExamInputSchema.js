import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutPracticeExamInputSchema } from './SubjectUpdateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedUpdateWithoutPracticeExamInputSchema } from './SubjectUncheckedUpdateWithoutPracticeExamInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateWithoutPracticeExamInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutPracticeExamInputSchema)]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
