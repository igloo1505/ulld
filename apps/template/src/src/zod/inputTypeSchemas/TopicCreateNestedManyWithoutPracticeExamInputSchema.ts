import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutPracticeExamInputSchema } from './TopicCreateWithoutPracticeExamInputSchema';
import { TopicUncheckedCreateWithoutPracticeExamInputSchema } from './TopicUncheckedCreateWithoutPracticeExamInputSchema';
import { TopicCreateOrConnectWithoutPracticeExamInputSchema } from './TopicCreateOrConnectWithoutPracticeExamInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicCreateNestedManyWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutPracticeExamInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => TopicUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => TopicCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicCreateNestedManyWithoutPracticeExamInputSchema;
