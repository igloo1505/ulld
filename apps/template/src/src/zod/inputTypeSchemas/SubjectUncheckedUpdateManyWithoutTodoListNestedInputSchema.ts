import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutTodoListInputSchema } from './SubjectCreateWithoutTodoListInputSchema';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from './SubjectUncheckedCreateWithoutTodoListInputSchema';
import { SubjectCreateOrConnectWithoutTodoListInputSchema } from './SubjectCreateOrConnectWithoutTodoListInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema } from './SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema } from './SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema';
import { SubjectUpdateManyWithWhereWithoutTodoListInputSchema } from './SubjectUpdateManyWithWhereWithoutTodoListInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema: z.ZodType<Prisma.SubjectUncheckedUpdateManyWithoutTodoListNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutTodoListInputSchema),z.lazy(() => SubjectCreateWithoutTodoListInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutTodoListInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutTodoListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutTodoListInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutTodoListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema;
