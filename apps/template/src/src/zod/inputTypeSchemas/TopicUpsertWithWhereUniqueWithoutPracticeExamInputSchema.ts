import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutPracticeExamInputSchema } from './TopicUpdateWithoutPracticeExamInputSchema';
import { TopicUncheckedUpdateWithoutPracticeExamInputSchema } from './TopicUncheckedUpdateWithoutPracticeExamInputSchema';
import { TopicCreateWithoutPracticeExamInputSchema } from './TopicCreateWithoutPracticeExamInputSchema';
import { TopicUncheckedCreateWithoutPracticeExamInputSchema } from './TopicUncheckedCreateWithoutPracticeExamInputSchema';

export const TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutPracticeExamInputSchema;
