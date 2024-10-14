import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutPracticeExamInputSchema } from './TopicUncheckedUpdateManyWithoutPracticeExamInputSchema.js';
export const TopicUpdateManyWithWhereWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutPracticeExamInputSchema) ]),
}).strict();
export default TopicUpdateManyWithWhereWithoutPracticeExamInputSchema;