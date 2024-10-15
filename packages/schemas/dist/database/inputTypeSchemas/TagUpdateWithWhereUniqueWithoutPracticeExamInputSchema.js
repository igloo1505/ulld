import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutPracticeExamInputSchema } from './TagUpdateWithoutPracticeExamInputSchema.js';
import { TagUncheckedUpdateWithoutPracticeExamInputSchema } from './TagUncheckedUpdateWithoutPracticeExamInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => TagWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TagUpdateWithoutPracticeExamInputSchema), z.lazy(() => TagUncheckedUpdateWithoutPracticeExamInputSchema)]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
