import { z } from 'zod';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema.js';
import { SubjectCreateOrConnectWithoutPracticeExamInputSchema } from './SubjectCreateOrConnectWithoutPracticeExamInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema = z.object({
    create: z.union([z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema), z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema).array(), z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema), z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema;
