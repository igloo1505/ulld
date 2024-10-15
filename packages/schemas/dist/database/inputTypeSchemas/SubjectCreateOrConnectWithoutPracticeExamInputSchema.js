import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema.js';
export const SubjectCreateOrConnectWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    create: z.union([z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema)]),
}).strict();
export default SubjectCreateOrConnectWithoutPracticeExamInputSchema;
