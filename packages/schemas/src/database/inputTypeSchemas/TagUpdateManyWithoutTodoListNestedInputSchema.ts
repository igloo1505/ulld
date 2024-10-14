import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutTodoListInputSchema } from './TagCreateWithoutTodoListInputSchema';
import { TagUncheckedCreateWithoutTodoListInputSchema } from './TagUncheckedCreateWithoutTodoListInputSchema';
import { TagCreateOrConnectWithoutTodoListInputSchema } from './TagCreateOrConnectWithoutTodoListInputSchema';
import { TagUpsertWithWhereUniqueWithoutTodoListInputSchema } from './TagUpsertWithWhereUniqueWithoutTodoListInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutTodoListInputSchema } from './TagUpdateWithWhereUniqueWithoutTodoListInputSchema';
import { TagUpdateManyWithWhereWithoutTodoListInputSchema } from './TagUpdateManyWithWhereWithoutTodoListInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutTodoListNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutTodoListNestedInput> = z.object({
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

export default TagUpdateManyWithoutTodoListNestedInputSchema;
