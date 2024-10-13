import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutKanbanInputSchema } from '../SubjectCreateWithoutKanbanInputSchema.js';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from '../SubjectUncheckedCreateWithoutKanbanInputSchema.js';
export const SubjectCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();
export default SubjectCreateOrConnectWithoutKanbanInputSchema;