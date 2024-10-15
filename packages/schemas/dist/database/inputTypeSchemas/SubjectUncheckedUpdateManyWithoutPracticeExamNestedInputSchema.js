import { z } from 'zod';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema.js';
import { SubjectCreateOrConnectWithoutPracticeExamInputSchema } from './SubjectCreateOrConnectWithoutPracticeExamInputSchema.js';
import { SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema } from './SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema } from './SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema.js';
import { SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema } from './SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema.js';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
export const SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema = z.object({
    create: z.union([z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema), z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema).array(), z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema), z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema), z.lazy(() => SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema), z.lazy(() => SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema), z.lazy(() => SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => SubjectScalarWhereInputSchema), z.lazy(() => SubjectScalarWhereInputSchema).array()]).optional(),
}).strict();
export default SubjectUncheckedUpdateManyWithoutPracticeExamNestedInputSchema;
