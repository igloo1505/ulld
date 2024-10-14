import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutTodoListInputSchema } from './TopicUpdateWithoutTodoListInputSchema.js';
import { TopicUncheckedUpdateWithoutTodoListInputSchema } from './TopicUncheckedUpdateWithoutTodoListInputSchema.js';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema.js';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutTodoListInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutTodoListInputSchema;