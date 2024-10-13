import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutPracticeExamInputSchema } from '../TopicUpdateWithoutPracticeExamInputSchema.js';
import { TopicUncheckedUpdateWithoutPracticeExamInputSchema } from '../TopicUncheckedUpdateWithoutPracticeExamInputSchema.js';
import { TopicCreateWithoutPracticeExamInputSchema } from '../TopicCreateWithoutPracticeExamInputSchema.js';
import { TopicUncheckedCreateWithoutPracticeExamInputSchema } from '../TopicUncheckedCreateWithoutPracticeExamInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema;