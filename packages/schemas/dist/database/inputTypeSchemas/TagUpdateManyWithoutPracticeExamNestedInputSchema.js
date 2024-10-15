import { z } from 'zod';
import { TagCreateWithoutPracticeExamInputSchema } from './TagCreateWithoutPracticeExamInputSchema.js';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from './TagUncheckedCreateWithoutPracticeExamInputSchema.js';
import { TagCreateOrConnectWithoutPracticeExamInputSchema } from './TagCreateOrConnectWithoutPracticeExamInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema } from './TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema } from './TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema.js';
import { TagUpdateManyWithWhereWithoutPracticeExamInputSchema } from './TagUpdateManyWithWhereWithoutPracticeExamInputSchema.js';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
export const TagUpdateManyWithoutPracticeExamNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutPracticeExamInputSchema), z.lazy(() => TagCreateWithoutPracticeExamInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema), z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema), z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema), z.lazy(() => TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema), z.lazy(() => TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TagUpdateManyWithWhereWithoutPracticeExamInputSchema), z.lazy(() => TagUpdateManyWithWhereWithoutPracticeExamInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TagScalarWhereInputSchema), z.lazy(() => TagScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TagUpdateManyWithoutPracticeExamNestedInputSchema;
