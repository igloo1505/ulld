import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema.js';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema.js';
import { TagCreateOrConnectWithoutTodoListInputSchema } from './TagCreateOrConnectWithoutTodoListInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutTodoListInputSchema } from './TagUpsertWithWhereUniqueWithoutTodoListInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutTodoListInputSchema } from './TagUpdateWithWhereUniqueWithoutTodoListInputSchema.js';
import { TagUpdateManyWithWhereWithoutTodoListInputSchema } from './TagUpdateManyWithWhereWithoutTodoListInputSchema.js';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
export const TagUncheckedUpdateManyWithoutTodoListNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutTodoListNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTodoListInputSchema),z.lazy(() => TagCreateWithoutTodoListInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema),z.lazy(() => TagUncheckedCreateWithoutTodoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTodoListInputSchema),z.lazy(() => TagCreateOrConnectWithoutTodoListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutTodoListInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutTodoListInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutTodoListInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutTodoListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutTodoListInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutTodoListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default TagUncheckedUpdateManyWithoutTodoListNestedInputSchema;