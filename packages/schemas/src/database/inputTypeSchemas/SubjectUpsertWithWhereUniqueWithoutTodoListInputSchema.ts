import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutTodoListInputSchema } from './SubjectUpdateWithoutTodoListInputSchema';
import { SubjectUncheckedUpdateWithoutTodoListInputSchema } from './SubjectUncheckedUpdateWithoutTodoListInputSchema';
import { SubjectCreateWithoutTodoListInputSchema } from './SubjectCreateWithoutTodoListInputSchema';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from './SubjectUncheckedCreateWithoutTodoListInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutTodoListInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutTodoListInputSchema;
