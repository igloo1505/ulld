import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutPracticeExamInputSchema } from './TopicUpdateWithoutPracticeExamInputSchema.js';
import { TopicUncheckedUpdateWithoutPracticeExamInputSchema } from './TopicUncheckedUpdateWithoutPracticeExamInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => TopicWhereUniqueInputSchema),
    data: z.union([z.lazy(() => TopicUpdateWithoutPracticeExamInputSchema), z.lazy(() => TopicUncheckedUpdateWithoutPracticeExamInputSchema)]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
