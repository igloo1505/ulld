import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema';
import { TopicCreateOrConnectWithoutTodoListInputSchema } from './TopicCreateOrConnectWithoutTodoListInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicCreateNestedManyWithoutTodoListInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutTodoListInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutTodoListInputSchema),z.lazy(() => TopicCreateWithoutTodoListInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutTodoListInputSchema),z.lazy(() => TopicCreateOrConnectWithoutTodoListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicCreateNestedManyWithoutTodoListInputSchema;
