import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutPracticeExamInputSchema } from './TopicUpdateWithoutPracticeExamInputSchema';
import { TopicUncheckedUpdateWithoutPracticeExamInputSchema } from './TopicUncheckedUpdateWithoutPracticeExamInputSchema';

export const TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutPracticeExamInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
