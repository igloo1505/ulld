import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutTodoListInputSchema } from './TopicUpdateWithoutTodoListInputSchema';
import { TopicUncheckedUpdateWithoutTodoListInputSchema } from './TopicUncheckedUpdateWithoutTodoListInputSchema';

export const TopicUpdateWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutTodoListInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutTodoListInputSchema;
