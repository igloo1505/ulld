import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutTodoListInputSchema } from '../SubjectCreateWithoutTodoListInputSchema.js';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from '../SubjectUncheckedCreateWithoutTodoListInputSchema.js';
import { SubjectCreateOrConnectWithoutTodoListInputSchema } from '../SubjectCreateOrConnectWithoutTodoListInputSchema.js';
import { SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema } from '../SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema.js';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema } from '../SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema.js';
import { SubjectUpdateManyWithWhereWithoutTodoListInputSchema } from '../SubjectUpdateManyWithWhereWithoutTodoListInputSchema.js';
import { SubjectScalarWhereInputSchema } from '../SubjectScalarWhereInputSchema.js';
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