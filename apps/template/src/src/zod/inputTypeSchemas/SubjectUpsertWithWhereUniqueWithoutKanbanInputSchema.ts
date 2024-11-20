import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutKanbanInputSchema } from './SubjectUpdateWithoutKanbanInputSchema';
import { SubjectUncheckedUpdateWithoutKanbanInputSchema } from './SubjectUncheckedUpdateWithoutKanbanInputSchema';
import { SubjectCreateWithoutKanbanInputSchema } from './SubjectCreateWithoutKanbanInputSchema';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from './SubjectUncheckedCreateWithoutKanbanInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutKanbanInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema;
