import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutTodoListInputSchema } from './TopicUncheckedUpdateManyWithoutTodoListInputSchema';

export const TopicUpdateManyWithWhereWithoutTodoListInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutTodoListInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutTodoListInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutTodoListInputSchema;
