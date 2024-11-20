import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutTodoListInputSchema } from './SubjectUpdateWithoutTodoListInputSchema';
import { SubjectUncheckedUpdateWithoutTodoListInputSchema } from './SubjectUncheckedUpdateWithoutTodoListInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutTodoListInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema;
