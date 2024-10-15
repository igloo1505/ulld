import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema.js';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutKanbanInputSchema } from './SubjectUncheckedUpdateManyWithoutKanbanInputSchema.js';
export const SubjectUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();
export default SubjectUpdateManyWithWhereWithoutKanbanInputSchema;