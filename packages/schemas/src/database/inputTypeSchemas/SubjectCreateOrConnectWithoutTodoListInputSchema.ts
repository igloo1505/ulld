import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutTodoListInputSchema } from './SubjectCreateWithoutTodoListInputSchema';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from './SubjectUncheckedCreateWithoutTodoListInputSchema';

export const SubjectCreateOrConnectWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutTodoListInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutTodoListInputSchema;
