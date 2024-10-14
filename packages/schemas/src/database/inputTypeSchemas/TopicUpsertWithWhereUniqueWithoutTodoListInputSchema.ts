import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutTodoListInputSchema } from './TopicUpdateWithoutTodoListInputSchema';
import { TopicUncheckedUpdateWithoutTodoListInputSchema } from './TopicUncheckedUpdateWithoutTodoListInputSchema';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema';

export const TopicUpsertWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutTodoListInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutTodoListInputSchema;
