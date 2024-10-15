import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutTodoListInputSchema } from './TopicCreateWithoutTodoListInputSchema.js';
import { TopicUncheckedCreateWithoutTodoListInputSchema } from './TopicUncheckedCreateWithoutTodoListInputSchema.js';
import { TopicCreateOrConnectWithoutTodoListInputSchema } from './TopicCreateOrConnectWithoutTodoListInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutTodoListInputSchema } from './TopicUpsertWithWhereUniqueWithoutTodoListInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutTodoListInputSchema } from './TopicUpdateWithWhereUniqueWithoutTodoListInputSchema.js';
import { TopicUpdateManyWithWhereWithoutTodoListInputSchema } from './TopicUpdateManyWithWhereWithoutTodoListInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutTodoListNestedInput> = z.object({
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
export default TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema;