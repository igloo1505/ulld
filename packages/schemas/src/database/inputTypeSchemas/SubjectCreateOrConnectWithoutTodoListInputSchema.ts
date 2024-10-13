import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutTodoListInputSchema } from '../SubjectCreateWithoutTodoListInputSchema.js';
import { SubjectUncheckedCreateWithoutTodoListInputSchema } from '../SubjectUncheckedCreateWithoutTodoListInputSchema.js';
export const SubjectCreateOrConnectWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutTodoListInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutTodoListInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutTodoListInputSchema) ]),
}).strict();
export default SubjectCreateOrConnectWithoutTodoListInputSchema;