import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutPracticeExamInputSchema } from '../TopicCreateWithoutPracticeExamInputSchema.js';
import { TopicUncheckedCreateWithoutPracticeExamInputSchema } from '../TopicUncheckedCreateWithoutPracticeExamInputSchema.js';
export const TopicCreateOrConnectWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default TopicCreateOrConnectWithoutPracticeExamInputSchema;