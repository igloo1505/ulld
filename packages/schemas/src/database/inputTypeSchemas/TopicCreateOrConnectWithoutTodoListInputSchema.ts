import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema';

export const TopicCreateOrConnectWithoutTodoListInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutTodoListInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutTodoListInputSchema;
