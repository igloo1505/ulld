import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutKanbanInputSchema } from './SubjectUncheckedUpdateManyWithoutKanbanInputSchema';

export const SubjectUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutKanbanInputSchema;
