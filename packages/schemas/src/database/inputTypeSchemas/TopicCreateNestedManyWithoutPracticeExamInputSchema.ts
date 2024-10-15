import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutPracticeExamInputSchema } from './TopicCreateWithoutPracticeExamInputSchema.js';
import { TopicUncheckedCreateWithoutPracticeExamInputSchema } from './TopicUncheckedCreateWithoutPracticeExamInputSchema.js';
import { TopicCreateOrConnectWithoutPracticeExamInputSchema } from './TopicCreateOrConnectWithoutPracticeExamInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicCreateNestedManyWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutPracticeExamInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => TopicCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TopicCreateNestedManyWithoutPracticeExamInputSchema;