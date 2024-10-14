import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutTodoListInputSchema } from './SubjectCreateWithoutTodoListInputSchema';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from './SubjectUncheckedCreateWithoutTodoListInputSchema';
import { SubjectCreateOrConnectWithoutTodoListInputSchema } from './SubjectCreateOrConnectWithoutTodoListInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectCreateNestedManyWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectCreateNestedManyWithoutTodoListInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutTodoListInputSchema),z.lazy(() => SubjectCreateWithoutTodoListInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutTodoListInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutTodoListInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectCreateNestedManyWithoutTodoListInputSchema;
