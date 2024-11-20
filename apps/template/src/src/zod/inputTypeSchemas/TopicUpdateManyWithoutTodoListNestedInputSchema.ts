import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema';
import { TopicCreateOrConnectWithoutTodoListInputSchema } from './TopicCreateOrConnectWithoutTodoListInputSchema';
import { TopicUpsertWithWhereUniqueWithoutTodoListInputSchema } from './TopicUpsertWithWhereUniqueWithoutTodoListInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithWhereUniqueWithoutTodoListInputSchema } from './TopicUpdateWithWhereUniqueWithoutTodoListInputSchema';
import { TopicUpdateManyWithWhereWithoutTodoListInputSchema } from './TopicUpdateManyWithWhereWithoutTodoListInputSchema';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';

export const TopicUpdateManyWithoutTodoListNestedInputSchema: z.ZodType<Prisma.TopicUpdateManyWithoutTodoListNestedInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutTodoListInputSchema),z.lazy(() => TopicCreateWithoutTodoListInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema),z.lazy(() => TopicUncheckedCreateWithoutTodoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutTodoListInputSchema),z.lazy(() => TopicCreateOrConnectWithoutTodoListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TopicUpsertWithWhereUniqueWithoutTodoListInputSchema),z.lazy(() => TopicUpsertWithWhereUniqueWithoutTodoListInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TopicUpdateWithWhereUniqueWithoutTodoListInputSchema),z.lazy(() => TopicUpdateWithWhereUniqueWithoutTodoListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TopicUpdateManyWithWhereWithoutTodoListInputSchema),z.lazy(() => TopicUpdateManyWithWhereWithoutTodoListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TopicScalarWhereInputSchema),z.lazy(() => TopicScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TopicUpdateManyWithoutTodoListNestedInputSchema;
