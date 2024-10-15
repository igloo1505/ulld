import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema } from './SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => SubjectScalarWhereInputSchema),
    data: z.union([z.lazy(() => SubjectUpdateManyMutationInputSchema), z.lazy(() => SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema)]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema;
