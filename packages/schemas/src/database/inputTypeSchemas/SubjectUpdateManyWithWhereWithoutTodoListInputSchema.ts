import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutTodoListInputSchema } from './SubjectUncheckedUpdateManyWithoutTodoListInputSchema';

export const SubjectUpdateManyWithWhereWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutTodoListInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutTodoListInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutTodoListInputSchema;
