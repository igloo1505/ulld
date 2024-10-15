import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutTodoListInputSchema } from './SubjectUpdateWithoutTodoListInputSchema.js';
import { SubjectUncheckedUpdateWithoutTodoListInputSchema } from './SubjectUncheckedUpdateWithoutTodoListInputSchema.js';
export const SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutTodoListInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutTodoListInputSchema) ]),
}).strict();
export default SubjectUpdateWithWhereUniqueWithoutTodoListInputSchema;