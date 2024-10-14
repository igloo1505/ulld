import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutPracticeExamInputSchema } from './TopicUncheckedUpdateManyWithoutPracticeExamInputSchema';

export const TopicUpdateManyWithWhereWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutPracticeExamInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutPracticeExamInputSchema;
