import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutKanbanInputSchema } from './SubjectCreateWithoutKanbanInputSchema';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from './SubjectUncheckedCreateWithoutKanbanInputSchema';

export const SubjectCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutKanbanInputSchema;
