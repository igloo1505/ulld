import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutKanbanInputSchema } from './SubjectUpdateWithoutKanbanInputSchema';
import { SubjectUncheckedUpdateWithoutKanbanInputSchema } from './SubjectUncheckedUpdateWithoutKanbanInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutKanbanInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema;
